import { Link } from "react-router-dom";

const RenderCommentable = ({ value }) => {

    var urlTo = '';

    if (value?.commentableType === 'recipe') {
        urlTo = `/recipes/${value?.commentable?.slug}`;
    }

    if (value?.commentableType === 'plan') {
        urlTo = `/plans/${value?.commentable?.slug}`;
    }

    if (value?.commentableType === 'combo') {
        urlTo = `/combos/${value?.commentable?.slug}`;
    }

    return (
        <div>
            <Link className="text-main hover:text-gray-400" to={urlTo}>
                {value?.commentable?.name}
            </Link>
        </div>
    )
}

export default RenderCommentable;