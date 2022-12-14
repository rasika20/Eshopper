import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

export default function errorfile() {
  return (
    <React.Fragment> 
		<div>
      <Helmet>
        <title>404 | E-Shopper</title>
      </Helmet>
        </div>
        	<div class="container text-center">
		<div class="logo-404">
		<Link to="/" ><img src="assets/images/home/logo.png" alt="" /></Link>
		</div>
		<div class="content-404">
			<img src="assets/images/404/404.png" class="img-responsive" alt="" />
			<h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
			<p>Uh... So it looks like you brock something. The page you are looking for has up and Vanished.</p>
			<h2><Link to="/" >Bring me back Home</Link></h2>
		</div>
	</div>

  
    <script src="js/jquery.js"></script>
	<script src="js/price-range.js"></script>
    <script src="js/jquery.scrollUp.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.prettyPhoto.js"></script>
    <script src="js/main.js"></script>

    </React.Fragment>
  )
}
