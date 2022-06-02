# 🚀 Frontend

 
## Índice de contenidos
* [AppLayout](#item1)
	 * [NavBar](#item2)
	 * [NavInfo](#item3)
	 * [Footer](#item4)
* [LoginForm](#item5)
* [RegisterForm](#item6)
* [SwiperHome](#item7)
* [Card](#item8)
* [CategorySectionCard](#item9)
* [PopularSearch](#item10)
* [SwiperWeightPlan](#item11)
* [CategoriesVideo](#item12)
	* [SesionCategory](#item13)
	* [VideoCategory](#item14)
	* [Video](#item15)
* [Recipes](#item16)
* [ChefsCountries](#item17)
* [AuthModal](#item18)
* [ButtonSupr](#item19)
* [MenuLeft](#item20)
* [CategoriesRecipes](#item21)
* [SelectCategory](#item22)
* [SelectRank](#item23)
* [ButtonRank](#item24)
* [BannerChef](#item25)
* [ButtomButton](#item26)
* [ProductImagenCarousel](#item27)
* [Matches](#item28)
* [MenuConfig](#item29)
* [MyAccountLayout](#item30)
* [PageLogo](#item31)
* [NavSearchBar](#item32)
* [CertificationChef](#item33)
* [Post](#item34)
* [DescriptionChef](#item35)
* [ButtonImage](#item36)
* [Details](#item37)
* [ButtonComprar](#item38)
* [Tab](#item39)
* [TabButton](#item40)
* [TabPanel](#item41)
* [TabsContainer](#item42)
* [TotalShopping](#item43)
* [TotalShoppingPrice](#item44)
* [InformationChef](#item45)
* [DescriptionPost](#item46)
* [CalendarDay](#item47)
* [calendar](#item48)
* [RequireAuth](#item49)
* [ScrollNavegacion](#item50)
* [SearchHome](#item51)
* [ButtonSearch](#item52)
* [WeightPlan](#item53)
* [Swiper](#item54)
* [config](#item55)
* [DescriptionChef](#item56)
* [DescriptionPost](#item57)
* [FormAccount](#item58)
* [InformacionChef](#item59)
* [ingredientRow](#item60)
* [ingredientRowDetails](#item61)
* [LyOverview](#item62)
* [MealDetailOverview](#item63)
* [MealDetailOverviewImages](#item64)
* [PasswordUser](#item65)
* [PaypalLogin](#item66)
* [PaypalUser](#item67)
* [ProductInfo](#item68)
* [BannerPage](#item69)
* [BoxCalendar](#item70)
* [BoxName](#item71)
* [ButtonCart](#item72)
* [ButtonChange](#item73)
* [ButtonItems](#item74)
* [SelectOrder](#item75)
* [CardChef](#item76)
* [CardGym](#item77)
* [CardOrder](#item78)
* [CardPaypal](#item79)
* [CardProduct](#item80)
* [Card Recipes](#item81)
* [CardResum](#item82)
* [CardWithTitle](#item83)
* [Checkbox](#item84)
* [CheckboxConfig](#item85)
* [WaPay](#item86)



<a name="item1"></a>
### AppLayout
 
AppLayout es un componente padre de enrutamiento entre los hijos NavBar, NavInfo y Footer. Este contiene una variable que permite agregar el contenido correspondiente a cada página de la aplicación. 


<a name="item2"></a>
* ### NavBar
 
Contiene la parte superior del header donde se ubican los items que direccionan la navegación del usuario hacia categorías, vendedores e inicio de sesión.  


![](https://i.imgur.com/RK1zhGy.jpg)
[Subir](#top)


<a name="item3"></a>
* ### NavInfo
Contiene la barra inferior del header, está compuesto por la localización, direccionamientos hacia recetas, planes y combos. 


![](https://i.imgur.com/PkK97Pb.jpg)
[Subir](#top)


 
<a name="item4"></a>
* ### Footer
 
Almacena toda la información del pié de página.


![](https://i.imgur.com/LundOua.jpg) 



<a name="item5"></a>
### LoginForm
 
Vista del login donde el usuario agrega datos para validar su acceso a la plataforma.


![](https://i.imgur.com/oEplWmR.jpg)
 


<a name="item6"></a>
### RegisterForm
 
Página en la cual el usuario puede rellenar los campos requeridos para el registro en la aplicación. 


![](https://i.imgur.com/oQwg5rG.jpg)



<a name="item7"></a>
### SwiperHome
 
Contiene las imágenes de portada modo slider. 


![](https://i.imgur.com/Glk2nCD.jpg) 

[Subir](#top)



<a name="item8"></a>
### Card
 
Titulación de las secciones. Recibe parámetro de texto modificable, debido a que se utiliza en varias secciones del home.
![](https://i.imgur.com/oKX0UsN.jpg)

 
[Subir](#top)



<a name="item9"></a>
### CategorySectionCard
 
Componente utilizado para las imágenes de las categorías.
![](https://i.imgur.com/X0b6gXh.jpg)

[Subir](#top)




<a name="item10"></a>
### PopularSearch
 
Rectángulo con estilos específicos donde se agrega la información, imagen y texto de una sección publicitaria. 
![](https://i.imgur.com/epl8lQh.jpg)

[Subir](#top)



<a name="item11"></a>
### SwiperWeightPlan
 
Sección de los planes, donde se trae información de los planes como imagen, título y descripción breve. 
![](https://i.imgur.com/XTwqKMq.jpg)
 
[Subir](#top)





<a name="item12"></a>
### CategoriesVideo
 
Toda la sección de categorías con videos. 

![](https://i.imgur.com/OcBFt3l.jpg)

[Subir](#top)





<a name="item13"></a>
* ### SesionCategory

Select de las categorías.

![](https://i.imgur.com/lVviHpJ.jpg)

[Subir](#top)




<a name="item14"></a>
* ### VideoCategory

Descripción del video, contiene imagen y nombre del vendedor, nombre de la receta. 

![](https://i.imgur.com/BlF8cca.jpg) 

[Subir](#top)




<a name="item15"></a>
* ### Video

Modelo de la estructura de la card donde se muestra el video.

![](https://i.imgur.com/ZbqvqxU.jpg)

 
[Subir](#top)





<a name="item16"></a>
### Recipes

Componente que contiene la estructura de la plantilla de como se muestra la receta en el home. 

![](https://i.imgur.com/R1kSxvW.jpg) 

 
[Subir](#top)




<a name="item17"></a>
### ChefsCountries

Contiene sección de chefs populares por países. 

![](https://i.imgur.com/s8M3PYt.jpg) 

 
[Subir](#top)





------------


<a name="item18"></a>
### AuthModal
 
Este componente es el encargado de la validación de escuchar el clic al seleccionar el Button de inicio de sesión donde nos permite iniciar en la vista del login o en la vista del registro.


![](https://i.imgur.com/sv9LjAY.jpg)  
 
[Subir](#top)



<a name="item19"></a>
### ButtonSupr
 
Componente con las dos opciones de vista (Grid View, ListView). en las pantallas de resultados de busqueda.

![](https://i.imgur.com/oblMl0x.jpg)

[Subir](#top)



<a name="item20"></a>
### MenuLeft

Este componente es el encargado de la estructura del sistema de filtrado que aparece en el lateral izquierdo en las pantallas de resultados de búsqueda.  A su vez contiene 6 componentes.   

![](https://i.imgur.com/4iNFTtX.jpg) 
 
[Subir](#top)



<a name="item21"></a>
### CategoriesRecipes
 
Componente encargado del filtrado por categorías.

![](https://i.imgur.com/nodHnhR.jpg) 
 
[Subir](#top)



<a name="item22"></a>
### SelectCategory
 
Componente encargado del filtrado por Types.

![](https://i.imgur.com/czTDiK6.jpg)
 
[Subir](#top)



<a name="item23"></a>
### SelectRank
 
Componente encargado del filtrado por Ranking. 

![](https://i.imgur.com/qb1jAl5.jpg)
 
[Subir](#top)



<a name="item24"></a>
### ButtonRank 
 
Componente con botones para aplicar o resetear los filtros.

![](https://i.imgur.com/SSGvOPm.jpg)

[Subir](#top)



<a name="item25"></a>
### BannerChef
 
Este componente contiene la estructura de las cards con la información mostrada de cada vendedor desde la vitrina de vendedores y el home.

![](https://i.imgur.com/KQQe1Zd.jpg)
 
[Subir](#top)



<a name="item26"></a>
### ButtomButton
 
Componente con botones de paginación que se repite en varias secciones.

![](https://i.imgur.com/7UNmpRB.jpg)
 
[Subir](#top)



<a name="item27"></a>
### ProductImagenCarousel

Componentes con la vista de las imagenes en el detalle del producto

![](https://i.imgur.com/6KCthjp.jpg)
 
[Subir](#top)




<a name="item28"></a>
### Matches
 
Botones de interaccion con funcionalidades para hacer match, agregar a favoritos o descartar un producto.

![](https://i.imgur.com/VrVdiMo.jpg)

[Subir](#top)




<a name="item29"></a>
### MenuConfig
 
Componente padre del menu desplegable del panel de usuario con iconos e item.

![](https://i.imgur.com/15MaLOu.jpg)

[Subir](#top)




<a name="item30"></a>
### MyAccountLayout
 
Panel de herramientas del usuario vista con iconos.

![](https://i.imgur.com/yG20mk5.jpg)
 
[Subir](#top)




<a name="item31"></a>
### PageLogo
 
Componente con el logo de la app que se adapta al tamaño adecuado.

![](https://i.imgur.com/2sY7Kq7.jpg)
 
[Subir](#top)




<a name="item32"></a>
### NavSearchBar
 
Select de los tipos que encontramos en el header.

![]()

[Subir](#top)





<a name="item33"></a>
### CertificationChef
 
Componente con informacion profesional del vendedor desde su perfil.

![](https://i.imgur.com/0FU20yz.jpg)
 
[Subir](#top)






<a name="item34"></a>
### Post
 
Entradas del blog del vendedor ubicadas en el lateral izquierdo del perfil del vendedor.

![](https://i.imgur.com/k4IAEZ8.jpg)
 
[Subir](#top)






<a name="item35"></a>
### DescriptionChef
 
Descripcion escrita por el vendedor en su perfil

![](https://i.imgur.com/lOrkBhB.jpg)
 
[Subir](#top)





<a name="item36"></a>
### ButtonImage
 
Este componente contiene los botones de opcion de compra de ingredientes en Wallmart, Insta card y Amazon Fresh, los cuales redireccionan hacia estos sitios para realizar la compra con esos supermercados. Asi mismo se encuentra dentro de este el boton de pago del producto (receta, plan o combo) a traves de pay pal. 


![](https://i.imgur.com/kXCgkaW.jpg) 
![](https://i.imgur.com/ZSwrYTC.jpg)
 
[Subir](#top)





<a name="item37"></a>
### Details
 
components que encargado de mostrar esta informacion que se encuentra en la vista de detalle de recetas, combos y planes (Level, categoria, time, igredientes)


![](https://i.imgur.com/ICEzwHy.jpg)
 
[Subir](#top)






<a name="item38"></a>
### ButtonComprar
 
Componentes de boton de comprar (desde la caja blanca hasta el boton en la vista del detalle del producto(recetas....) 


![](https://i.imgur.com/W5vbfBG.jpg)
 
[Subir](#top)





<a name="item39"></a>
### Tab
 
Componente dinamico encargado del movimiento del cambio de las lista seleccionada.


![](https://i.imgur.com/EjGCgq4.jpg)

[Subir](#top)





<a name="item41"></a>
### TabPanel
 
componente encargado de mostar o ocultar la informacion de sus hijos dependiendo de la pestaña seleccionada.


![](https://i.imgur.com/EjGCgq4.jpg)

[Subir](#top)







<a name="item42"></a>
### TabsContainer
 
chequea que sus hijos si es 1 lo muestra si son muchos lo rederiza.


![](https://i.imgur.com/XmcMSTW.jpg)
 
[Subir](#top)





<a name="item43"></a>
### TotalShopping
 
componente encargado de mostrar imagen de un tamaño en particular para la vista del producto


![](https://i.imgur.com/fUptzyn.jpg)

[Subir](#top)







<a name="item44"></a>
### TotalShoppingPrice
 
Componente  encargado de mostrar precio en la vista del detalle del producto unico

![](https://i.imgur.com/W5vbfBG.jpg)
 
[Subir](#top)





<a name="item45"></a>
### InformationChef
 
componente encargado de Mostrar las redes sociales de chef


![](https://i.imgur.com/7BfR5Ig.jpg)
 
[Subir](#top)







<a name="item46"></a>
### DescriptionPost
 
Componente encargado de mostra del detalle de la descripcion de post del blog


![](https://i.imgur.com/PNWKOmO.jpg)

[Subir](#top)





<a name="item47"></a>
### CalendarDay
 
Componente encargado de recibir el dia correspondiente del calendar


![](https://live.staticflickr.com/65535/52094212550_2251271785_m.jpg)
 
[Subir](#top)




<a name="item48"></a>
### calendar
 
Componente encargado del diseño del calendario 


![](https://i.imgur.com/pPh6blH.jpg)
 
[Subir](#top)





<a name="item49"></a>
### RequireAuth
 
Componente de autenticacion del login de usuario. Envuelve MyAccountLayou.


![](https://i.imgur.com/H2GSeFq.png) 
 
[Subir](#top)






<a name="item50"></a>
### ScrollNavegacion
 
Componente encargado de contener el diseño circular. Componente principal ButtonButton(ScrollNavegacion)


![](https://i.imgur.com/axBDP5H.png)

[Subir](#top)





<a name="item51"></a>
### SearchHome
 
Componente encargado de motor de Busqueda en el home contiene el componente ButtonSearch


![](https://i.imgur.com/VUipCHj.jpg)
 
[Subir](#top)



<a name="item52"></a>
* ### ButtonSearch
 
Componente encargado del selector de busqueda por sus categorias.


![](https://i.imgur.com/ZcvnIqL.jpg)

[Subir](#top)





<a name="item53"></a>
### WeightPlan
 
Componente de la vista de cuadro de planes. 

![](https://i.imgur.com/zz5z3jo.jpg)

[Subir](#top)







<a name="item54"></a>
### Swiper
 
CategoryCard, Combos, Home, Overview, Popular, Recipes, WeightPlan


![]()

[Subir](#top)





<a name="item55"></a>
### config
 
Componente de la parte del usuario en la vista de configuracion.


![](https://i.imgur.com/EABaJmL.png)

[Subir](#top)





<a name="item56"></a>
### DescriptionChef
 
Componente encargado del chef de la description del menu lateral


![](https://i.imgur.com/Z317Uop.jpg)
 
[Subir](#top)





<a name="item57"></a>
### DescriptionPost
 
Componente encargado de mostrar la informacion de post de Anya del menu lateral


![](https://i.imgur.com/lbnWbfI.jpg)

[Subir](#top)




<a name="item58"></a>
### FormAccount
 
Componente de la informacion personal de user en la vista de usuario (my personal informayion)


![](https://i.imgur.com/oBI4w4l.jpg)

[Subir](#top)





<a name="item59"></a>
### InformacionChef
 
Datos de los canales de venta del chef que aparece en el menu lateral.


![](https://i.imgur.com/KmzMHy8.jpg)

[Subir](#top)







<a name="item60"></a>
### ingredientRow
 
Componente encargado del diseño del cuadro de la lista de ingredientes.


![](https://i.imgur.com/NZWLwnL.jpg)
 
[Subir](#top)





<a name="item61"></a>
### ingredientRowDetails

Componente encargado del detalle que lleva cada vista de la lista de ingredientes.


![](https://i.imgur.com/NZWLwnL.jpg)

[Subir](#top)




<a name="item62"></a>
### LyOverview

Componente encargado del diseño de las letras de la vista overview


![](https://i.imgur.com/PwvSgsV.jpg)

[Subir](#top)




<a name="item63"></a>
### MealDetailOverview

componente del scroll de la vista por dia.


![]()

[Subir](#top)




<a name="item64"></a>
### MealDetailOverviewImages

Componete encargado de mostrar la imagenes al seleccionar un cuadro de la vista de overview.

![]()

[Subir](#top)




<a name="item65"></a>
### PasswordUser

Componente donde permite al usuario agregar contraseña en la vista paypal user.

![](https://i.imgur.com/R2OqFUW.png)
 
[Subir](#top)

<a name="item65"></a>
### PaypalLogin

Componente que fue creado para mostrar el diseño de PayPal de iniciar sesión de paypal.

![](https://i.imgur.com/Ohu20I5.png)
 
[Subir](#top)



<a name="item67"></a>
### PaypalUser

Componente que se encarga de colocar la informacion de my paypal en la vista de user.


![](https://i.imgur.com/Ua3GKRL.jpg)

[Subir](#top)




<a name="item68"></a>
### ProductInfo

Componente que se encarga mostrar todo el contenido de la vista de detalle del producto.

![](https://i.imgur.com/oaZUbKe.jpg)

[Subir](#top)




<a name="item69"></a>
### BannerPage

componente del banner de las diferente vista (revision).

![](https://i.imgur.com/aG1xRyc.png)

[Subir](#top)




<a name="item70"></a>
### BoxCalendar

Componente encargado del diseño del cuadro del calendario de la vista del usuario

![](https://i.imgur.com/9gQbIlN.jpg)

[Subir](#top)




<a name="item71"></a>
### BoxName

Componente que recibe el texto del dia de la semana (Sunday, Monday, Tuesday, Wednesday, Thursday, Friday).

![]()

[Subir](#top)




<a name="item72"></a>
### ButtonCart

Componente del boton de carrito.

![](https://i.imgur.com/xYF5GkZ.jpg)

[Subir](#top)




<a name="item73"></a>
### ButtonChange

Componente del boton de change

![](https://i.imgur.com/8FCip2e.png)

[Subir](#top)




<a name="item74"></a>
### ButtonItems

Componente que se encarga del diseño del boton de seleccion de (recipes, plans y combos)

![](https://i.imgur.com/O9JlBX9.png)

[Subir](#top)




<a name="item75"></a>
### SelectOrder

Componente del diseño de lista de ordenar por del vendedor.	

![](https://i.imgur.com/Q31CQTS.png)

[Subir](#top)




<a name="item76"></a>
### CardChef

Componente del vendedor. Vista sellers.

![](https://i.imgur.com/s4rgz6r.jpg)

[Subir](#top)





<a name="item78"></a>
### CardOrder

Componente donde aparece foto de nombre del vendedor, order, sellers.

![](https://i.imgur.com/IDxf85y.png)

[Subir](#top)




<a name="item79"></a>
### CardPaypal

Componente que se encuentra en la vista de la forma de pago de paypal (logo y modificar).

![](https://i.imgur.com/HYISllZ.png)

[Subir](#top)




<a name="item80"></a>
### CardProduct

Componente que contiene imagen y titulo del producto en la vista de paypal.

![](https://i.imgur.com/fgykcjx.png)

[Subir](#top)




<a name="item81"></a>
### CardRecipes

Componente de las recetas. 

![](https://i.imgur.com/eJSBoxj.png)

[Subir](#top)




<a name="item82"></a>
### CardResum

Componente de orden de resum en paypal.

![](https://i.imgur.com/3fKcpYB.jpg)

[Subir](#top)




<a name="item83"></a>
### CardWithTitle

Componente que fue realizado para la parte de configuraciones de My servings en la vista de usuario.

![](https://i.imgur.com/wv1BuLk.jpg)

[Subir](#top)






<a name="item84"></a>
### Checkbox

Componente del checkbok cuadrado.

![](https://i.imgur.com/D2ZuNwI.jpg)

[Subir](#top)




<a name="item85"></a>
### CheckboxConfig

Componente del checkbok circular.

![](https://i.imgur.com/tBic1Xs.jpg)

[Subir](#top)




<a name="item86"></a>
### WaPay

Componente encargado de mostrar la informacion de la lista de comparador de precio

![](https://i.imgur.com/tvnn47v.png)

[Subir](#top)


