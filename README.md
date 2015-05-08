# ParallaxSlider

Simple Slider for background images with parallax effect

Clone the repo if you want a simple example of ParallaxSlider

##Tutorial

Include files JS and CSS <br>

    <link type="text/css" rel="Stylesheet" href="parallax.slider.css" /> <br>
    <script src="parallax.slider.js"></script>

Call the script on class ".parallax-slider"

	<script type="text/javascript">
		$( document ).ready(function() {
			$(".parallax-slider").parallaxSlider({
				// Optional parameter
				// Default:
				// speedSlide : 5000
				// speedParallax : 0.5
				speedSlide : 5000,
				speedParallax : 0.50
			});
		});
	</script><br>
	
Include your parallax slider in a contanier

    <div class="container-slider">
		<div class="parallax-slider">
			<img src="img/img1.jpg">
			<img src="img/img2.jpg">
		</div>
	</div>
	
Where css of the container is something like 

    .container-slider{
    	width: 100%;
    	height: 600px;
    	position: relative;
    	margin: 0;
    }
    

