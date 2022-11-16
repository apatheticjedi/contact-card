// import modules
import "./form";
import "./submit";

// import CSS files
import "../css/index.css"

// import bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import images
import Logo from '../images/new-logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import { initdb } from "./database";

window.addEventListener('load', function () {
  initdb();
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});