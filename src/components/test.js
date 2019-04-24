{/* <div class="mapouter"><div class="gmap_canvas"><iframe width="768" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>Werbung: <a href="https://www.jetzt-drucken-lassen.de">jetzt-drucken-lassen.de</a></div><style>.mapouter{position:relative;text-align:right;height:500px;width:768px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:768px;}</style></div> */}

function ReactHeader(props) {
    return (
      <h1>
        React {props.version || 16} Documentation
      </h1>
    )
  }
==================
  function ReactHeader(props) {
    return (
      <h1>
        React {props.version || 16} Documentation
      </h1>
    )
  }

  /* eslint no-undef: 0 */ // --> OFF

===================
  handleOnClick ( () => {        
    fetch(proxyUrl + targetUrl)
    .then(res => res.json())
    .then(shop => {
      console.table(shop); // create table in console 
      this.setState({ 
        shop ,
        isLoading:false,
      });
    })
    .catch(e => {
      console.log(e);
    });
  } )  

  ============
  ```
  handleOnClick = () => {
    fetch(proxyUrl + targetUrl)
   .then(res => res.json())
   .then(shop => {
     console.table(shop); // create table in console 
     this.setState({ 
       shop ,
       isLoading:false,
     });
   })
   .catch(e => {
     console.log(e);
   });
  } ;  
  ```
=================
```
constructor() {
    super();
function handleOnClick() {
    fetch(proxyUrl + targetUrl)
   .then(res => res.json())
   .then(shop => {
     console.table(shop); // create table in console 
     this.setState({ 
       shop ,
       isLoading:false,
     });
   })
   .catch(e => {
     console.log(e);
   });
  } ;  
}

 handleOnClick();

```

==============

```
state = {
    isLoading: true,
    shop: null, 
    error: null
  };

  setState({shop ,isLoading:true}).then(this.setState({ shop , isLoading:false }); })
  ```
=================
```
handleSubmit(e) { 
    e.preventDefault();
    this.forceUpdate();
.
.
.
.
onClick={() => {console.log("test"); this.forceUpdate()} }
```
================== 
```
constructor(){
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };
  
  forceUpdateHandler(){
    this.forceUpdate();
  };
.
.
.
onClick={() => {console.log("test"); this.forceUpdateHandler()} }>
```
======================