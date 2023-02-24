import { useState } from "react";
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import usePlans from "../hooks/usePlans";
import useRecipes from "../hooks/useRecipes";
import { useEffect } from "react";
import { format } from "date-fns";
import { useFeedBack } from "../contexts/FeedBackContext";
import useAxios from "../hooks/useAxios";
import useEvents from "../hooks/useEvents";
import { useAuth } from "../contexts/AuthContext";
import Modal from "../componentes/Modal/Modal";
import DateFormatter from "../componentes/DateFormatter";
import imgUrl from "../helpers/imgUrl";
import { Link } from 'react-router-dom';
import ShowRecipeRow from "../componentes/ShowRecipeRow";
import ModalOverlay from "../componentes/Modal/ModalOverlay";
import ModalContainer from "../componentes/Modal/ModalContainer";

const OverviewUser = () => {

    const { user } = useAuth();

    const { setLoading } = useFeedBack();

    const [selectedEvent, setSelectedEvent] = useState(null);

    const [showPreparation, setShowPreparation] = useState(false);

    const [eventsFilters, setEventsFilters] = useState({
        page: 1,
        start: '',
        end: '',
        perPage: 100,
        clientId: user?.id
    });

    const [plansFilters, setPlansFilters] = useState({
        page: 1,
        perPage: 100,
        name: ''
    });

    const [selectedDayEvents, setSelectedDayEvents] = useState(null);

    const [recipesFilters, setRecipesFilters] = useState({
        page: 1,
        perPage: 100,
        name: ''
    });

    const [{ plans, numberOfPages: plansPages, loading: loadingPlans }, getPlans] = usePlans({ params: { ...plansFilters }, options: { useCache: false } });

    const [{ recipes, total, numberOfPages: recipesPages, loading: loadingRecipes }, getRecipes] = useRecipes({ params: { ...recipesFilters }, options: { useCache: false } });

    const [{ data: addEventData, loading: addEventLoading }, addEvent] = useAxios({ url: `/events`, method: 'POST' }, { manual: true, useCache: false });

    const [{ loading: removeEventLoading }, removeEvent] = useAxios({ url: ``, method: 'DELETE' }, { manual: true, useCache: false });

    const [{ }, getEventable] = useAxios({ url: `` }, { manual: true, useCache: false });

    const [{ }, getDayEvents] = useAxios({ url: `` }, { manual: true, useCache: false });

    const [{ events, loading: eventsLoading }, getEvents] = useEvents({ params: { ...eventsFilters }, options: { manual: true } });

    const [currentEvents, setCurrentEvents] = useState([]);

    useEffect(() => {
        if (eventsFilters?.start && eventsFilters?.end) {
            getEvents({
                params: {
                    ...eventsFilters
                }
            });
        }
    }, [eventsFilters])

    useEffect(() => {
        if (events?.length > 0) {
            setCurrentEvents(events);
        }
    }, [events])

    useEffect(() => {
        setLoading({
            show: addEventLoading,
            message: 'Loading'
        });
    }, [addEventLoading]);

    useEffect(() => {
        setLoading({
            show: eventsLoading,
            message: 'Loading'
        });
    }, [eventsLoading])

    useEffect(() => {
        if (addEventData) {
            setCurrentEvents((oldEvents) => {
                return [...oldEvents, addEventData];
            })
        }
    }, [addEventData]);


    useEffect(() => {
        let draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
            itemSelector: ".custom-event"
        });
    }, [])

    const handleDateClick = async (dateInfo) => {
        setLoading({
            show: true,
            message: 'Loading'
        });
        const response = await getDayEvents({ url: `/events/recipes?date=${dateInfo?.dateStr}` });

        setLoading({
            show: false,
            message: 'Loading'
        });

        setSelectedDayEvents({
            recipes: response?.data,
            date: dateInfo?.date
        });

    }

    const handleChange = (e, entity) => {
        if (entity === 'recipes') {
            setRecipesFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    [e.target.name]: e.target.value,
                    page: 1
                }
            })
        }

        if (entity === 'plans') {
            setPlansFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    [e.target.name]: e.target.value,
                    page: 1
                }
            })
        }
    }

    const handleDrop = (dropInfo) => {

        const eventableId = dropInfo?.draggedEl?.dataset?.recipeid || dropInfo?.draggedEl?.dataset?.planid;

        const eventType = dropInfo?.draggedEl?.dataset?.recipeid ? 'recipeId' : 'planId';

        const start = format(new Date(dropInfo?.date), 'yyyy-MM-dd');

        addEvent({
            data: {
                [eventType]: eventableId,
                start
            }
        });

    }

    const handleEventClick = async (e) => {

        setLoading({
            show: true,
            message: 'Loading'
        });

        const eventableId = e?.event?._def?.extendedProps?.plan?.id || e?.event?._def?.extendedProps?.recipe?.id;

        const eventableType = e?.event?._def?.extendedProps?.plan ? 'plans' : 'recipes';

        const clickedEventAble = await getEventable({ url: `/${eventableType}/${eventableId}` });

        setLoading({
            show: false,
            message: 'Loading'
        });


        const clickedEvent = {
            ...clickedEventAble?.data,
            start: e?.event?.start,
            end: e?.event?.end,
            isPlan: e?.event?._def?.extendedProps?.plan ? true : false,
            eventId: e?.event?._def?.publicId
        };
        setSelectedEvent(clickedEvent);
    }


    const handleDateInfo = (dateInfo) => {
        setEventsFilters((oldEventsFilters) => {
            return {
                ...oldEventsFilters,
                start: dateInfo?.start,
                end: dateInfo?.end
            }
        });
    }

    const handleRemove = () => {
        removeEvent?.({ url: `/events/${selectedEvent?.eventId}` }).then((response) => {
            setSelectedEvent(null);
            getEvents({
                params: {
                    ...eventsFilters
                }
            });
        });
    }

    return (
        <div className="container p-4 md:p-20 w-full mb-20">
            <p className="text-4xl font-bold text-black mb-8">Overview</p>

            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
                <div id="external-events" className="shadow bg-white p-4 rounded-xl">
                    <h3 className="mb-4 text-2xl font-bold">
                        Recipes
                    </h3>
                    <input style={{ backgroundColor: '#F0F0F0', border: 'none', outline: 'none' }}
                        type="text"
                        name="name"
                        onChange={(e) => { handleChange(e, 'recipes') }}
                        placeholder="Recipe name..."
                        className="w-full mb-4 rounded-xl focus:outline-none focus:ring-main"
                    />
                    <div style={{ height: '300px', overflowY: 'auto', backgroundColor: '#F0F0F0' }} className="custom-scrollbar custom-scrollbar-main p-4 rounded">
                        {recipes?.map((recipe, i) => {
                            return (
                                <div data-recipeid={recipe?.id} data-recipename={recipe?.name} key={i} className="custom-event py-2 px-4 my-2 bg-main rounded-xl text-white" style={{ cursor: 'pointer' }}>
                                    {recipe?.name}
                                </div>
                            )
                        })}
                        {
                            loadingRecipes &&
                            <p className="text-center">
                                Loading...
                            </p>
                        }
                    </div>

                    <h3 className="my-4 text-2xl font-bold">
                        Plans
                    </h3>
                    <input style={{ backgroundColor: '#F0F0F0', border: 'none', outline: 'none' }}
                        type="text"
                        name="name"
                        onChange={(e) => { handleChange(e, 'plans') }}
                        placeholder="Plan name..."
                        className="w-full mb-4 rounded-xl focus:outline-none focus:ring-main"
                    />

                    <div style={{ height: '300px', overflowY: 'auto', backgroundColor: '#F0F0F0' }} className="custom-scrollbar custom-scrollbar-main p-4 rounded">
                        {plans?.map((plan, i) => {
                            return (
                                <div data-planid={plan?.id} data-planname={plan?.name} key={i} className="custom-event py-2 px-4 my-2 bg-main rounded-xl text-white" style={{ cursor: 'pointer' }}>
                                    {plan?.name}
                                </div>
                            )
                        })}
                        {
                            loadingPlans &&
                            <p className="text-center">
                                Loading...
                            </p>
                        }
                    </div>
                </div>
                <div className="md:col-span-3 md:mt-0 mt-8">
                    <FullCalendar
                        eventClick={handleEventClick}
                        datesSet={handleDateInfo}
                        dateClick={handleDateClick}
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        droppable
                        drop={handleDrop}
                        events={currentEvents}
                    />
                </div>
            </div>
            <ModalOverlay
                show={selectedEvent}
                onClose={() => {
                    setSelectedEvent(null);
                    setShowPreparation(false);
                }}
            >
                <ModalContainer
                    widthClass={showPreparation ? 'w-11/12 md:w-4/12' : `w-11/12 md:w-1/2`}
                    style={{
                        transition: 'all .3s'
                    }}
                    onClose={() => {
                        setSelectedEvent(null);
                        setShowPreparation(false);
                    }}
                >
                    <h1 className="text-center font-bold text-xl mb-4">
                        {selectedEvent?.name}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                        <div className="text-center">
                            <h1 className="mb-4 font-semibold">Start:</h1>
                            <div className="bg-main text-white px-8 py-2 rounded-xl">
                                <DateFormatter dateFormat="dd/MM/yyyy" value={selectedEvent?.start} />
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="mb-4 font-semibold">End:</h1>
                            <div className="bg-main text-white px-8 py-2 rounded-xl">
                                <DateFormatter dateFormat="dd/MM/yyyy" value={selectedEvent?.end || selectedEvent?.start} />
                            </div>
                        </div>
                    </div>
                    {
                        selectedEvent?.isPlan ?
                            <div className="mt-8">
                                <h1 className="mb-4 font-semibold">
                                    Included Recipes:
                                </h1>
                                <div className="flex w-full items-center custom-scrollbar custom-scrollbar-main" style={{ overflowX: 'auto' }}>
                                    {selectedEvent?.uniqueRecipes?.map?.((recipe, i) => {
                                        return (
                                            <Link to={`/recipes/${recipe?.slug}`} style={{ maxWidth: '60px', overflow: 'hidden' }} title={recipe?.name} key={i}>
                                                <img className="rounded-full m-auto" style={{ height: '40px', width: '40px' }} src={imgUrl(recipe?.images?.[0]?.path)} alt="" srcset="" />
                                                <small className="m-auto text-center" style={{ whiteSpace: 'nowrap' }}>{recipe?.name}</small>
                                            </Link>
                                        )
                                    })}
                                </div>
                                <h1 className="mt-8 mb-4 font-semibold">
                                    Plan´s ingredients:
                                </h1>
                                <div className="flex space-x-4 w-full items-center custom-scrollbar custom-scrollbar-main" style={{ overflowX: 'auto' }}>
                                    {selectedEvent?.uniqueIngredients?.map?.((ingredient, i) => {
                                        return (
                                            <div className="text-center" style={{ maxWidth: '60px', overflow: 'hidden' }} title={ingredient?.name} key={i}>
                                                <img className="rounded-full m-auto" style={{ height: '40px', width: '40px' }} src={imgUrl(ingredient?.icon)} alt="" srcset="" />
                                                <small className="m-auto text-center" style={{ whiteSpace: 'nowrap' }}>{ingredient?.name}</small>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            :
                            <div className="mt-8">
                                <h1 className="mt-8 mb-4 font-semibold">
                                    Recipe´s ingredients:
                                </h1>
                                <div className="flex space-x-4 w-full items-center custom-scrollbar custom-scrollbar-main" style={{ overflowX: 'auto' }}>
                                    {selectedEvent?.recipeIngredients?.map?.((ingredient, i) => {
                                        return (
                                            <div className="text-center" title={ingredient?.ingredient?.name} key={i}>
                                                <img className="rounded-full m-auto" style={{ height: '40px', width: '40px' }} src={imgUrl(ingredient?.ingredient?.icon)} alt="" srcset="" />
                                                <small className="m-auto text-center" style={{ whiteSpace: 'nowrap' }}>{ingredient?.ingredient?.name}</small>
                                                <br />
                                                <small className="m-auto text-center" style={{ whiteSpace: 'nowrap' }}>{ingredient?.value} {ingredient?.measurementUnit?.name}</small>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                    }
                    <div className="text-center space-x-4">
                        <button onClick={handleRemove} disabled={removeEventLoading} className="bg-red-500 text-white mt-8 px-8 py-2 rounded-xl transition duration-500 hover:bg-white hover:text-main">
                            {
                                removeEventLoading ?
                                    'Loading'
                                    :
                                    'Remove from calendar'
                            }
                        </button>
                        {
                            !selectedEvent?.isPlan &&
                            <button
                                onClick={() => setShowPreparation((old) => !old)}
                                className="bg-main text-white mt-8 px-8 py-2 rounded-xl transition duration-500 hover:bg-white hover:text-main">
                                {
                                    showPreparation ?
                                        'Hide Preparation'
                                        :
                                        'Show Preparation'
                                }
                            </button>
                        }
                    </div>
                </ModalContainer>
                <ModalContainer
                    onClose={() => setShowPreparation(false)}
                    widthClass='mt-8 md:mt-auto w-full md:w-7/12 custom-scrollbar  custom-scrollbar-main'
                    animation="animate__fadeInDown"
                    style={{
                        display: showPreparation ? 'block' : 'none',
                        transition: 'all .3s'
                    }}
                >
                    <h1 className="text-2xl font-bold">
                        Preparation
                    </h1>
                    {
                        selectedEvent?.recipeSteps?.map((step, i) => {
                            return (
                                <div key={i} className="my-4">
                                    <h1 className="text-xl">
                                        Step: {i + 1}
                                    </h1>
                                    <p className="text-gray-400">
                                        {step?.content}
                                    </p>
                                </div>
                            )
                        })
                    }
                </ModalContainer>
            </ModalOverlay>

            <Modal show={selectedDayEvents} onClose={() => setSelectedDayEvents(null)}>
                <div style={{ maxHeight: '70vh', overflowY: 'auto' }} className="custom-scrollbar custom-scrollbar-main">
                    <h1 className="text-center font-bold text-xl mb-4">
                        Summary of the day:
                    </h1>
                    <p className="text-center">
                        <DateFormatter value={selectedDayEvents?.date} dateFormat='dd/MM/yyyy' />
                    </p>
                    <div className="mt-8">
                        <h1 className="mt-8 mb-4 font-semibold">
                            Day´s Recipes:
                        </h1>
                        {selectedDayEvents?.recipes?.map?.((recipe, i) => {
                            return (
                                <ShowRecipeRow recipe={recipe} key={i} />
                            )
                        })}
                    </div>
                </div>
            </Modal>
        </div >
    );
}

export default OverviewUser;