<?php
 defined('_JEXEC') or die; require_once __DIR__ . '/functions/tpl-init.php'; ?>
<!DOCTYPE html>
<!--[if IE 8]>
<html class="no-js lt-ie9" lang="<?php echo $htmlLang; ?>" >
<![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="<?php echo $htmlLang; ?>" >
<!--<![endif]-->
	<head>
		<meta name="robots" content="noindex, nofollow">
		<meta name="googlebot" content="noindex, nofollow" />			
		<meta name="viewport" content="initial-scale=1">
		<?php if ($loadBootstrap == 1) : ?>
			<link rel="stylesheet" href="<?php echo getDebugAssetUrl($tplUrl . '/css/bootstrap.min.css'); ?>">
		<?php elseif ($loadBootstrap == 2) : ?>
			<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
		<?php endif; ?>
		<?php if ($loadFontawesome == 1) : ?>
			<link rel="stylesheet" href="<?php echo getDebugAssetUrl($tplUrl . '/css/font-awesome.min.css'); ?>" type="text/css" media="screen" />
		<?php elseif ($loadFontawesome == 2) : ?>
			<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
		<?php endif; ?>
		<link rel="stylesheet" href="<?php echo getDebugAssetUrl($tplUrl . '/css/animate.css'); ?>" type="text/css" media="screen" />
		<link rel="stylesheet" href="<?php echo getDebugAssetUrl($tplUrl . '/css/template.css'); ?>" type="text/css" media="screen" />
		<link rel="stylesheet" href="<?php echo getDebugAssetUrl($tplUrl . '/css/j-backbone.css'); ?>" type="text/css" media="screen" />
		<?php if (@filesize('templates/' . $this->template . '/css/style' . $color_style . '.css') > 50): ?>
			<link rel="stylesheet" href="<?php echo $tplUrl . '/css/style' . $color_style . '.css'; ?>" type="text/css" media="screen" />
		<?php endif; ?>
		<?php if (@filesize('templates/' . $this->template . '/css/custom.css') > 5): ?>
			<link rel="stylesheet" href="<?php echo $tplUrl; ?>/css/custom.css" type="text/css" media="screen" />
			<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
		<?php endif; ?>
		<link rel="stylesheet" href="<?php echo getDebugAssetUrl($tplUrl . '/css/jquery.mmenu.all.css'); ?>">
		<link rel="stylesheet" href="<?php echo getDebugAssetUrl($tplUrl . '/css/jquery.mmenu.header.css'); ?>">
		<link rel="stylesheet" href="<?php echo $tplUrl; ?>/css/jquery-ui-custom.css" type="text/css" media="screen" />
		<?php if ($loadJquery == 1) : ?>
			<script src="<?php echo getDebugAssetUrl($tplUrl . '/js/jquery.min.js'); ?>" type="text/javascript"></script>
			<script src="<?php echo getDebugAssetUrl($tplUrl . '/js/jquery-noconflict.js'); ?>" type="text/javascript"></script>
			<script src="<?php echo getDebugAssetUrl($tplUrl . '/js/jquery-migrate.min.js'); ?>" type="text/javascript"></script>
		<?php elseif ($loadJquery == 2) : ?>
			<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
			<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
		<?php endif; ?>

		<jdoc:include type="head" />

		<?php if ($loadBootstrap == 1) : ?>
			<script src="<?php echo getDebugAssetUrl($tplUrl . '/js/bootstrap.min.js'); ?>" type="text/javascript"></script>
		<?php elseif ($loadBootstrap == 2) : ?>
			<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
		<?php endif; ?>
		<!--[if lt IE 9]>
		<script src="<?php echo $tplUrl; ?>/js/html5shiv.js" type="text/javascript"></script>
		<script src="<?php echo $tplUrl; ?>/js/respond.min.js" type="text/javascript"></script>
	    <![endif]-->
		<script src="<?php echo $tplUrl; ?>/js/modernizr.custom.js" type="text/javascript"></script>
		<script src="<?php echo $tplUrl; ?>/js/jquery.mmenu.min.js" type="text/javascript"></script>
		<script src="<?php echo $tplUrl; ?>/js/jquery.mmenu.header.min.js" type="text/javascript"></script>
		<script src="<?php echo $tplUrl; ?>/js/template.js" type="text/javascript"></script>
		<script src="<?php echo $tplUrl; ?>/js/j-backbone.js" type="text/javascript"></script>
		
		<link rel="stylesheet" href="<?php echo $tplUrl; ?>/css/jquery-ui.css" type="text/css" media="screen" />
		<script src="<?php echo $tplUrl; ?>/js/jquery-ui.js" type="text/javascript"></script>
		<script src="<?php echo $tplUrl; ?>/js/jquery.ui.touch-punch.js" type="text/javascript"></script>
		<!--script src="<?php echo $tplUrl; ?>/js/callRestService.js" type="text/javascript"></script-->

		<?php if (@filesize('templates/' . $this->template . '/js/analytics-head.js') > 5): ?>
			<?php include_once 'templates/' . $this->template . '/js/analytics-head.js'; ?>
		<?php endif; ?>

		<?php if ($topnavbar && $topnavbaraffix == 2): ?>
			<script src="<?php echo 'templates/' . $this->template . '/js/scroll-up-bar.min.js'; ?>" type="text/javascript"></script>
		<?php endif; ?>		

	</head>
	<body id="main" class="<?php echo $bodyclass. " " .$pageclass. " parentid-" .$parentId. " " .$parentName. " " .$option. " view-" .$view. " " .$frontpage. " itemid-" .$itemid. " " .$loggedin. " " .$rtl_detection; ?>">
    <div class="wrapper" id="page">
		<header class="main-header" <?php echo ($topnavbar && $topnavbaraffix) ? 'style="margin-bottom:75px;"' : '' ?>>
			<div class="headerBg">
			<?php if ($this->countModules('header')): ?>
				<div id="header" class="clearfix">
					<div class="container">
						<jdoc:include type="modules" name="header" style="standard" />
					</div>
				</div>
			<?php endif; ?>							
			<?php if(!$topnavbar) :?>
				<div class="container">
					<?php if ($this->countModules('navbar-brand')) : ?>
						<div class="navbar-brand ">
							<jdoc:include type="modules" name="navbar-brand" style="standard" />
						</div>
					<?php else: ?>
						
						<div class="logo pull-left">
							<?php echo $logo; ?>
						</div>
					<?php endif; ?>
					<a href="#mm-sidebar">
						<div type="button" class="navbar-toggle navbar-btn pull-right visible-xs">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</div>
					</a>
					<a href="#mm-sidebar2">
						<div type="button" class="navbar-toggle navbar-btn pull-right visible-xs">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</div>
					</a>
				</div>
				<?php if ($this->countModules('menu')): ?>
					<nav id="menu" class="clearfix">
						<div class="container">
						<div class="pull-right">
							<div class="navbar-collapse collapse pull-left hidden-xs">
								<jdoc:include type="modules" name="menu" style="basic" />		
							</div>	
<?php if ($this->countModules('services')): ?>
			<div class="services pull-left"><jdoc:include type="modules" name="services" style="standard" /></div>
				<?php endif; ?>	
</div>				
						</div>
					</nav>
					
				<?php endif; ?>
				<?php if ($this->countModules('menu2')): ?>
				<nav id="menu2" class="clearfix">
				<div class="container">
						<div class="pull-right subMenuPos">
				<div class="navbar-collapse collapse">
				<jdoc:include type="modules" name="menu2" style="basic" />	
				</div>
				</div>
				</div>
				</nav>
				<?php endif; ?>
			<?php endif; ?>
			<?php if ($this->countModules('menu') && $topnavbar) : ?>
				<nav id="menu" class="navbar-default <?php echo ($topnavbaraffix)? "navbar-fixed-top" : "navbar-static-top" ?> <?php echo ($topnavbarinverse)? "navbar-inverse" : " " ?> clearfix" role="navigation">
					<div class="container">
						<?php if ($this->countModules('navbar-brand')) : ?>
							<div class="navbar-brand ">
								<jdoc:include type="modules" name="navbar-brand" style="standard" />
							</div>
						<?php else: ?>
							<div class="logo">
								<?php echo $logo; ?>
							</div>
						<?php endif; ?>
						<div class="navbar-collapse collapse navbar-right">
							<jdoc:include type="modules" name="menu" style="basic" />
						</div>
						<a href="#mm-sidebar">
							<div type="button" class="navbar-toggle navbar-btn pull-right visible-xs">
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</div>
						</a>
					</div>
				</nav>
			<?php endif; ?>			
			</div>
		</header>
	<?php if ($this->countModules('slideshow')): ?>
		<div id="slider">
				<jdoc:include type="modules" name="slideshow" style="standard" />
		</div>
	<?php endif; ?>
	<?php if ($this->countModules('carousel')): ?>
		<div id="carousel">
				<jdoc:include type="modules" name="carousel" style="standard" />
		</div>
	<?php endif; ?>

	<?php if ($this->countModules('strapline')): ?>
		<div id="strapline">
			<div class="container animated fadeInUp">
				<jdoc:include type="modules" name="strapline" style="standard" />
			</div>
		</div>
	<?php endif; ?>
	<?php if ($this->countModules('top')): ?>
		<div id="top" class="clearfix top services-top">
			<div class="container">
				<jdoc:include type="modules" name="top" style="standard" />
			</div>
		</div>
	<?php endif; ?>
	<?php if ($this->countModules('middle')): ?>
		<div id="middle" class="clearfix">
			<jdoc:include type="modules" name="middle" style="standard" />
		</div>
	<?php endif; ?>	
	<?php if ($this->countModules('above')): ?>
		<div id="above">
			<div class="container bannerWrapper">
				<jdoc:include type="modules" name="above" style="standard" />
			</div>
		</div>
	<?php endif; ?>
	<?php if ($this->countModules('breadcrumbs')): ?>
		<div id="breadcrumbs">
			<div class="container">
				<jdoc:include type="modules" name="breadcrumbs" style="standard" />
			</div>
		</div>
	<?php endif; ?>
		<!-- Mainbody -->
		<div id="mainbody" class="clearfix">
			<div class="container">
				<div class="row">
				
				<?php if ($this->countModules('left-content')): ?>
						<div id="left-content" class="col-md-6 sliderTopMargin">
							<jdoc:include type="modules" name="left-content" style="standard" />
						</div>
						<?php endif; ?>
						<?php if ($this->countModules('right-content')): ?>
						<div id="right-content" class="col-md-6 sliderTopMargin">
							<jdoc:include type="modules" name="right-content" style="standard" />
						</div>
						<?php endif; ?>
						
				<?php if ($this->countModules('left')): ?>
					<div class="sidebar-left col-md-<?php echo $left; ?>">
						<div class="sidebar-nav">
							<jdoc:include type="modules" name="left" style="standard" />
						</div>
					</div>
				<?php endif; ?>
					<!-- Content Block -->
					<div id="content" class="col-md-<?php echo $span;?>">
						<div id="message-component">
							<jdoc:include type="message" />
						</div>
						<?php if ($this->countModules('above-content')): ?>
						<div id="above-content">
							<jdoc:include type="modules" name="above-content" style="standard" />
						</div>
						<?php endif; ?>
						<?php
 $app = JFactory::getApplication(); $menu = $app->getMenu(); if ($frontpageshow) { ?>
							<div id="content-area">
								<jdoc:include type="component" />
							</div>
						<?php
 } else { if ($menu->getActive() !== $menu->getDefault()) { ?>
							<div id="content-area">
								<jdoc:include type="component" />
							</div>
							<?php
 } } ?>
												
					</div>
					<?php if ($this->countModules('right')) : ?>
					<aside class="sidebar-right col-md-<?php echo $right; ?>">
						<jdoc:include type="modules" name="right" style="standard" />
					</aside>
					<?php endif; ?>
					
					
					
				</div>
			</div>
		</div>
		<div id="below-content-Module">
		<?php if ($this->countModules('below-content')): ?>
						<div id="below-content" class="container">
							<jdoc:include type="modules" name="below-content" style="standard" />
						</div>
						<?php endif; ?>
						<div class="row">
						<div class="col-md-12 moduleFooter">
								<jdoc:include type="modules" name="below-mod" style="standard" />
							</div>
							<div id="layoutMargin">
							<div class="col-md-4">
								<jdoc:include type="modules" name="below-mod1" style="standard" />
							</div>
							<div class="col-md-4">
								<jdoc:include type="modules" name="below-mod2" style="standard" />
							</div>
							<div class="col-md-4">
								<jdoc:include type="modules" name="below-mod3" style="standard" />
							</div>
							</div>
						</div>
						</div>
		<?php if ($this->countModules('bottom1Above')): ?>
		<div id="bottom1Above" class="clearfix">
		<div class="container">
			<jdoc:include type="modules" name="bottom1Above" style="standard" />
			</div>
		</div>
		<?php endif; ?>
		<?php if ($this->countModules('bottom1')): ?>
		<div id="bottom1" class="clearfix">
		<div class="container">
			<jdoc:include type="modules" name="bottom1" style="standard" />
			</div>
		</div>
		<?php endif; ?>
		<?php if ($this->countModules('bottom2')): ?>
		<div id="bottom2" class="clearfix">
			<div class="container">
				<jdoc:include type="modules" name="bottom2" style="standard" />
			</div>
		</div>
		<?php endif; ?>
		<footer class="footer clearfix">
			<div class="footer-1 container">
						<div class="row mb-5">
							<div class="col-md-3">
							    <?php if ($this->countModules('footer-logo')) : ?>
									<jdoc:include type="modules" name="footer-logo" style="standard" />
								<?php endif; ?>
							</div>
					    	<div class="col-md-7">
					    		<?php if ($this->countModules('footer-services')) : ?>
									<jdoc:include type="modules" name="footer-services" style="standard" />
								<?php endif; ?>
							</div>
							<div class="col-md-2">
							    <?php if ($this->countModules('social-media')) : ?>
									<jdoc:include type="modules" name="social-media" style="standard" />
								<?php endif; ?>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4 col-lg-3">
								<?php if ($this->countModules('footer-links-col1')) : ?>
									<jdoc:include type="modules" name="footer-links-col1" style="standard" />
								<?php endif; ?>
							</div>
							<div class="col-md-8 col-lg-7">
								<?php if ($this->countModules('footer-links-col2')) : ?>
									<jdoc:include type="modules" name="footer-links-col2" style="standard" />
								<?php endif; ?>
							</div>
							<div class="col-md-12 col-lg-2">
								<?php if ($this->countModules('footer-links-right')) : ?>
									<jdoc:include type="modules" name="footer-links-right" style="standard" />
								<?php endif; ?>
							</div>
					</div>
			</div>
		</footer>
		<?php if ($copyrights) : ?>
			<div class="copyrights">
				<div class="container">
						<div class="row">
							<div class="col-md-7">
							<?php if ($this->countModules('copyright-links')) : ?>
								<jdoc:include type="modules" name="copyright-links" style="standard" />
							<?php endif; ?>
							</div>
							<div class="col-md-5">
							<?php if ($this->countModules('copyright')) : ?>
								<jdoc:include type="modules" name="copyright" style="standard" />
							<?php endif; ?>
							</div>
						</div>
					</div>
			</div>
			<!--
			<div class="footer-2">
				<div class="container">
					<div class="row">
						<?php if ($this->countModules('footer')) : ?>
							<jdoc:include type="modules" name="footer" style="standard" />
						<?php endif; ?>
					</div>
				</div>
			</div>
			
			<div class="footer-3 text-center">
				<p>
					<span class="sm-cr-circle1"></span><span class="sm-cr-circle2"></span>
						<?php echo $copytext ?>
					<span class="sm-cr-circle1"></span><span class="sm-cr-circle2"></span>
				</p>
			</div>
			<?php  else : ?>
			<div class="footer-3 text-center">
				<p>
					<span class="sm-cr-circle1"></span><span class="sm-cr-circle2"></span>
						<a href="<?php echo $this->baseurl ?>"> <?php echo $sitename; ?></a> <?php echo date('Y');?>
					<span class="sm-cr-circle1"></span><span class="sm-cr-circle2"></span>
		        </p>
			</div>
			<?php endif; ?>
			-->
	    <div id="mm-sidebar">
			<div id="panel-overview">
				<div style="text-align: center;">
					<a href="<?php echo $this->baseurl ?>/" class="<?php echo $icon1; ?>"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#page" class="<?php echo $icon6; ?>"></a>
				</div>
				<?php if ($this->countModules('mob-menu-above')): ?>
				<div class="mob-menu-above">
					<jdoc:include type="modules" name="mob-menu-above" style="standard" />
				</div>
				<?php endif; ?>
				<?php if ($this->countModules('menu')): ?>
					<jdoc:include type="modules" name="menu" style="none" />
				<?php endif; ?>
				<?php if ($this->countModules('mob-menu-below')): ?>
				<div class="mob-menu-below">
					<jdoc:include type="modules" name="mob-menu-below" style="standard" />
				</div>
				<?php endif; ?>
			</div>
		</div>
		<div id="mm-sidebar2">
			<div id="panel-overview">
				<div style="text-align: center;">
					<a href="<?php echo $this->baseurl ?>/" class="<?php echo $icon1; ?>"></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#page" class="<?php echo $icon6; ?>"></a>
				</div>
				<?php if ($this->countModules('mob-menu-above')): ?>
				<div class="mob-menu-above">
					<jdoc:include type="modules" name="mob-menu-above" style="standard" />
				</div>
				<?php endif; ?>
				<?php if ($this->countModules('menu2')): ?>
					<jdoc:include type="modules" name="menu2" style="none" />
				<?php endif; ?>
				<?php if ($this->countModules('mob-menu-below')): ?>
				<div class="mob-menu-below">
					<jdoc:include type="modules" name="mob-menu-below" style="standard" />
				</div>
				<?php endif; ?>
			</div>
		</div>
		<?php if ($totop) : ?>
			<div>
				<a href="#" class="go-top">
					<?php if ($totoptext) : ?>
						<?php echo $gotoptext; ?>
					<?php  else : ?>
						<?php echo JText::_('TPL_JOOSTRAP_GOTOP_TEXT');?>
					<?php endif; ?>
					<?php if ($totopicon) : ?>
						<i class="<?php echo $gotopicon; ?>"></i>
					<?php  else : ?>
						<i class="<?php echo JText::_('TPL_JOOSTRAP_GOTOP_ICON');?>"></i>
					<?php endif; ?>
				</a>
			</div>
		<?php endif; ?>
	<script type="text/javascript">
		jQuery( document ).ready(function() {
			jQuery('.tooltip').tooltip({
				html: true
			});
		});
	</script>
	<script type="text/javascript">  
      document.addEventListener("DOMContentLoaded", function() {
  // Call onTabClick with the default active tab on page load
  var activeTab = document.querySelector(".customTab .tab.active");
  if (activeTab) {
    onTabClick(activeTab);
  }
});

var tabs = document.querySelectorAll(".customTab .tab");
var blogItems = document.querySelectorAll(".blog-items.rowBox .blog-item");

function onTabClick(tab) {
  // Remove 'active' class from all tabs
  tabs.forEach(tab => tab.classList.remove('active'));

  // Add 'active' class to the clicked tab
  tab.classList.add('active');

  // Get the array list from the data attribute
  var itemsToShow = JSON.parse(tab.getAttribute('data-items'));

  // Hide all blog items
  blogItems.forEach((item) => {
    item.style.display = 'none';
  });

  // Display the specified blog items
  itemsToShow.forEach(index => {
    var item = blogItems[index - 1];
    if (item) {
      item.style.display = 'block';
    }
  });
}
     /* var tabs = document.querySelectorAll(".customTab .tab");
var blogItems = document.querySelectorAll(".blog-items.rowBox .blog-item");

function onTabClick(itemsToShow) {
  // Remove 'active' class from all tabs
  tabs.forEach(tab => tab.classList.remove('active'));

  // Add 'active' class to the clicked tab
  event.target.classList.add('active');

  // Hide all blog items
  blogItems.forEach((item) => {
    item.style.display = 'none';
  });

  // Display the specified blog items
  itemsToShow.forEach(index => {
    var item = blogItems[index - 1];
    if (item) {
      item.style.display = 'block';
    }
  });
}*/
/*var tabs = document.querySelectorAll(".customTab .tab");
var blogItems = document.querySelectorAll(".blog-items.rowBox .blog-item");

function onTabClick(number) {
  // Remove 'active' class from all tabs
  tabs.forEach(tab => tab.classList.remove('active'));

  // Add 'active' class to the clicked tab
  tabs[number - 1].classList.add('active');

  // Hide all blog items except the first one
  blogItems.forEach((item, index) => {
    if (item) {
    item.style.display = (index === 0) ? 'block' : 'none';
    }
  });

  // Determine which blog items to display based on the tab number
  var itemsToShow = [];
  switch (number) {
    case 1:
      itemsToShow = [1, 2, 3];
      break;
    case 2:
      itemsToShow = [1, 2, 18, 19];
      break;
    case 3:
      itemsToShow = [1, 2, 9, 10, 11, 12, 18, 19];
      break;
    case 4:
      itemsToShow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
      break;
  }

  // Display the specified blog items
  itemsToShow.forEach(index => {
    var item = blogItems[index - 1];
    if (item) {
      item.style.display = 'block';
    }
  });
}*/
 /* popup codes */
      function showPopup(popupId) {
            document.getElementById(popupId).style.display = 'flex';
        }

        function closePopup(event, popupId) {
            if (event.target.classList.contains('popup') || event.target.classList.contains('close')) {
                document.getElementById(popupId).style.display = 'none';
            }
        }
      
		jQuery( document ).ready(function() {
			jQuery("div#mm-sidebar, div#mm-sidebar2").mmenu({
				<?php if ($mmenucolor) : ?>
					classes: "<?php echo $mmenucolor; ?>",
				<?php endif; ?>
					offCanvas: {
					position : "<?php echo $mmenuslide; ?>",
					zposition: "<?php echo $mmenueffect; ?>"
					},
					header: {
						title: "<?php echo $mmenutitle; ?>",
						add: <?php echo $mmenuheader; ?>,
						update: "<?php echo $mmenuheader; ?>"
				}
			});
          // popup iframe vide start
          var videoSrcPrivat='https://dev.kautel.de/images/filme/kautel_private_Mietkaution.mp4';  
          var videoSrcGewerbe='https://dev.kautel.de/images/filme/katel_gewerbliche_Mietkaution.mp4'; 
          var videoSrcBau='https://dev.kautel.de/images/filme/kautel_Baugewerbe_Handwerk.mp4'; 
          // for Privat
          jQuery('#popupVideoPrivat').on('show.bs.modal', function (e) {
    jQuery("#popupVideoPrivat iframe").attr('src', videoSrcPrivat); 
  })
          // for Gewerbe
          jQuery('#popupVideoGewerbe').on('show.bs.modal', function (e) {
    jQuery("#popupVideoGewerbe iframe").attr('src', videoSrcGewerbe); 
  })
          // for Bau
          jQuery('#popupVideoBau').on('show.bs.modal', function (e) {
    jQuery("#popupVideoBau iframe").attr('src', videoSrcBau); 
  })
          // close iframe for Privat/Gewerbe/Bau
          jQuery("#popupVideoPrivat, #popupVideoGewerbe, #popupVideoBau").on('hidden.bs.modal', function (e) {
    jQuery("#popupVideoPrivat iframe, #popupVideoGewerbe iframe, #popupVideoBau iframe").attr("src", "");
});
          // popup iframe vide end
		});
	</script>
	<?php if ($topnavbar && $topnavbaraffix == 2): ?>
	<script type="text/javascript">
		jQuery( document ).ready(function(){
			jQuery('#menu, #menu2').scrollupbar();
		});
	</script>
	<?php endif; ?>
	<?php if ($bsUpdate == 1) : ?>
		<script src="<?php echo getDebugAssetUrl($tplUrl . '/js/bsUpdate.js'); ?>" type="text/javascript"></script>
	<?php endif; ?>
	<?php if (@filesize('templates/' . $this->template . '/js/analytics-bottom.js') > 5): ?>
		<?php include_once 'templates/' . $this->template . '/js/analytics-bottom.js'; ?>
	<?php endif; ?>
	
	
	<?php
        $session = JFactory::getSession();
        if (!empty($_SERVER['QUERY_STRING'])) {
            $get_string = $_SERVER['QUERY_STRING'];
            parse_str($get_string, $get_array);
            $session->set('sess_createoffer', $get_string);
            unset($get_array['vsu']);
            $session->set('sess_server_query_string', http_build_query($get_array));
        }


        if (!empty($_GET['mbNr']) && !empty($_GET['spNr'])) {
            $mbNr = $_GET['mbNr'];
            $spNr = $_GET['spNr'];
            $mainframe = JFactory::getApplication();
            // store the variable that we would like to keep for next time
            // function syntax is setUserState( $key, $value );
            $mainframe->setUserState("mbNr", $mbNr); // value received from Input
            $mainframe->setUserState("spNr", $spNr); // value received from Input
            $append_url = WEB_ROOT . '/kaution/sparkasse/antrag/kaution.jsf?mbNr=' . $mbNr . '&spNr=' . $spNr . '&posNr=P000001';
            //$callBgT =WEB_ROOT.'/kaution/sparkasse/antrag/ergebnis.jsf?mbNr=' . $mbNr . '&spNr=' . $spNr . '&posNr=P000001';
            $callBgT = '/kaution/kautel/antrag/kaution.jsf?mode=1&vsu=' . $mbNr . '&spNr=' . $spNr . '&posNr=P000001';
            $callBgT2 = '/kaution/kautel/gewerbliche/gewKaution.jsf?mode=1&vsu=' . $mbNr . '&spNr=' . $spNr . '&posNr=P000001';
            $createOffer = '/kaution/kautel/gewerbliche/gewKaution.jsf?' . $params;
            $contact = WEB_ROOT . '/admin4Form/service/kontakt/kontakt.jsf?mbNr=' . $mbNr . '&spNr=' . $spNr . '&posNr=P000001';
            $login = WEB_ROOT . '/admin4Form/secure/anmelden/login.jsf?mbNr=' . $mbNr . '&spNr=' . $spNr . '&posNr=P000001';
        } else {
            $mbNr = '';
            $spNr = '';
            $callBgT_createoffer = '';
            $callBgT_query_string = '';
            $callBgT_createoffer = $session->get('sess_createoffer');
            $callBgT_query_string = $session->get('sess_server_query_string');
            $mainframe = JFactory::getApplication();


            // store the variable that we would like to keep for next time
            // function syntax is setUserState( $key, $value );

            $mainframe->setUserState("mbNr", $mbNr); // value received from Input
            $mainframe->setUserState("spNr", $spNr); // value received from Input  $append_url
            //$append_url = WEB_ROOT . '/kaution/sparkasse/antrag/ergebnis.jsf'; // error got
            //$callBgT =WEB_ROOT.'/kaution/sparkasse/antrag/ergebnis.jsf';
			if($callBgT_query_string){
				$callBgT = '/kaution/kautel/antrag/kaution.jsf?' . $callBgT_query_string . '&vsu=';
				$callBgT2 = '/kaution/kautel/gewerbliche/gewKaution.jsf?' . $callBgT_query_string . '&vsu=';
			}else{
				$callBgT = '/kaution/kautel/antrag/kaution.jsf?' . $callBgT_query_string . 'vsu=';
				$callBgT2 = '/kaution/kautel/gewerbliche/gewKaution.jsf?' . $callBgT_query_string . 'vsu=';
			}
            //$callBgT = '/kaution/kautel/antrag/kaution.jsf?' . $callBgT_query_string . 'vsu=';
            //$callBgT2 = '/kaution/kautel/gewerbliche/gewKaution.jsf?' . $callBgT_query_string . '&vsu=';
			
            $createOffer_gewerbliche = '/kaution/kautel/gewerbliche/gewKaution.jsf?' . $callBgT_createoffer;
            $createOffer_Angebot = '/kaution/kautel/angebot/vermieterbrief.jsf?' . $callBgT_createoffer;
            $createOffer_Antrag = '/kaution/kautel/antrag/kaution.jsf?' . $callBgT_createoffer;
			
            //$contact = WEB_ROOT . '/admin4Form/service/kontakt/kontakt.jsf'; // error got
            //$login = WEB_ROOT . '/admin4Form/secure/anmelden/login.jsf'; // error got
        }
        ?>
	
	<script type="text/javascript">
	
const _banner = document.getElementById("above");
let _body = document.getElementsByTagName("body")[0].contains(_banner);
if(!_body){
	document.getElementsByTagName("body")[0].classList.add('withoutBanner');
}

	
	// Add active class to the current button (highlight it)
var header = document.getElementById("BtnKautelFun");
//if(document.body.classList.contains('btnKauFun')){
      if (header) {
var btns = header.getElementsByClassName("btnKauFun");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
	  //debugger;
  var current = document.getElementsByClassName("activeKautel");
  current[0].className = current[0].className.replace(" activeKautel", "");
  this.className += " activeKautel";  
  /*var link = current[0].id;
  alert(link);*/
  });
}
}

/*const btn1 = document.querySelector('.btnKauFun');
if(btn1.classList.contains('activeKautel')){
	var btnTxt = document.querySelector('.activeKautel').innerHTML;
}*/
	
	/*jQuery(window).load(function(){
			// cookie codes
			var cookieHeight = document.getElementById('redim-cookiehint').offsetHeight;
			document.getElementById("page").style.marginTop = cookieHeight+'px';	
			jQuery(window).resize(function(){
				var cookieHeight = document.getElementById('redim-cookiehint').offsetHeight;
				document.getElementById("page").style.marginTop = cookieHeight+'px';	
			})
		})*/
		/*const selectedBtn = document.getElementsByClassName("activeKautel");
		var link = selectedBtn[0].innerHTML;
		// cliking slider
		jQuery('#sliderID1').click(function(){									
			alert(selectedBtn[0].id);
		});*/
		
							//	
								var link='&zw=2';
								jQuery("#sliderID1").click(function(){
									link = '&zw=1';
									let usedLink = document.querySelector('.kautel17Privat');
									let urlLink1 = usedLink.getAttribute("href");
									const linkArray = urlLink1.split("&");
									if(linkArray.length>2){
										const pop = linkArray.pop();
										const resLink = linkArray.toString().replaceAll(",", "&");
										const clickedValue = resLink + link;
										jQuery('.kautel17Privat').attr('href', clickedValue);
									}else{
										const clickedValue = linkArray[0] + link;
										jQuery('.kautel17Privat').attr('href', clickedValue);
									}
								});
								jQuery("#sliderID2").click(function(){
									link = '&zw=2';
									let usedLink = document.querySelector('.kautel17Privat');
									let urlLink1 = usedLink.getAttribute("href");
									const linkArray = urlLink1.split("&");
									if(linkArray.length>2){
										const pop = linkArray.pop();
										const resLink = linkArray.toString().replaceAll(",", "&");
										const clickedValue = resLink + link;
										jQuery('.kautel17Privat').attr('href', clickedValue);
									}else{
										const clickedValue = linkArray[0] + link;
										jQuery('.kautel17Privat').attr('href', clickedValue);
									}
								});
								jQuery("#sliderID3").click(function(){
									link = '&zw=3';
									let usedLink = document.querySelector('.kautel17Privat');
									let urlLink1 = usedLink.getAttribute("href");
									const linkArray = urlLink1.split("&");
									if(linkArray.length>2){
										const pop = linkArray.pop();
										const resLink = linkArray.toString().replaceAll(",", "&");
										const clickedValue = resLink + link;
										jQuery('.kautel17Privat').attr('href', clickedValue);
									}else{
										const clickedValue = linkArray[0] + link;
										jQuery('.kautel17Privat').attr('href', clickedValue);
									}
								});
								jQuery("#sliderID4").click(function(){
									link = '&zw=4';
									let usedLink = document.querySelector('.kautel17Privat');
									let urlLink1 = usedLink.getAttribute("href");
									const linkArray = urlLink1.split("&");
									if(linkArray.length>2){
										const pop = linkArray.pop();
										const resLink = linkArray.toString().replaceAll(",", "&");
										const clickedValue = resLink + link;
										jQuery('.kautel17Privat').attr('href', clickedValue);
									}else{
										const clickedValue = linkArray[0] + link;
										jQuery('.kautel17Privat').attr('href', clickedValue);
									}
								});
								//
								/*debugger;
								const tab2 = document.querySelector('#slidingTab2');
								const tab2Active = tab2.classList.contains('active');*/
								var tab2Active = false;
    		                    jQuery(function() {
								var url = window.location.href;
								var url_array = url.split("?");
								var mbNr = '<?php echo trim($mbNr); ?>';
								var spNr = '<?php echo trim($spNr); ?>';
								var createOffer_gewerbliche = '';
								var createOffer_Angebot = '';
								var createOffer_Antrag = '';
								var rUrl = '';
								//var fr1 = 400;
                              //var fr2 = 2500;
								var vsu = '';	
                                  const element = document.getElementById("secondTab");
                                  if (element) {
                                    var fr1 = 2500;
                                  }else{
                                    var fr1 = 400;
                                  }
								jQuery('.percentClass, .KautelPrice').val(fr1);
                                  //jQuery('.kautel17Privat').attr('href', callBgt);
								jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
									//debugger;
								  var target = jQuery(e.target).attr("id") // activated tab
								  if(target === 'gewerbeTab2'){
                                    var fr1 = 2500;
									  tab2Active = true;
                                    setTimeout(function () {
                                     var vsu = document.getElementById('bruttoeinkommen2').value;
									  var callBgt2 = '<?php echo $callBgT2; ?>' + vsu + link;
									  jQuery('.kautel17Privat').attr('href', callBgt2);
                                  	},0);
									  
                                   
                                    jQuery('.percentClass, .KautelPrice').val(fr1);
                                    //jQuery('.kautel17Privat').attr('href', callBgt);
								  }else{
                                    var fr1 = 400;
									  var vsu = document.getElementById('bruttoeinkommen').value;
									  var callBgt = '<?php echo $callBgT; ?>' + vsu + link;
									  jQuery('.kautel17Privat').attr('href', callBgt);
                                    jQuery('.percentClass, .KautelPrice').val(fr1);
								  }
								});		
								//
								if ((mbNr != '') && (spNr != '')){
										//var rUrl = '&returnURL=' + url_array[0];
										var vsu = '&vsu=' + fr1;
										var callBgt = '<?php echo $callBgT; ?>' + vsu;
								} else{
										//var rUrl = '?returnURL=' + url_array[0];
										var vsu = fr1;
										var callBgt = '<?php echo $callBgT; ?>' + vsu;
										var createOffer_gewerbliche = '<?php echo $createOffer_gewerbliche; ?>';
										var createOffer_Angebot = '<?php echo $createOffer_Angebot; ?>';
										var createOffer_Antrag = '<?php echo $createOffer_Antrag; ?>';
								}
                                  var btn = document.getElementById("BtnKautelFun");
								if(btn && btn.getAttribute("style")){
									var callBgt = '<?php echo $callBgT; ?>' + vsu;	
								}else{
									var callBgt = '<?php echo $callBgT; ?>' + vsu + link;	
								}
								//var callBgt = '<?php echo $callBgT; ?>' + vsu + link;	
								var callBgt2 = '<?php echo $callBgT2; ?>' + vsu + link;	
								jQuery('.kautel17Privat').attr('href', callBgt);
								jQuery('.upperParam1').attr('href', createOffer_gewerbliche);
								jQuery('.upperParam2').attr('href', createOffer_Angebot);
								jQuery('.upperParam3').attr('href', createOffer_Antrag);								
								jQuery('.percentClass, .KautelPrice').val(fr1);
								
								jQuery("#Rangeslider").slider({
									value:fr1,
									value:10,
									min: 400,
									step: 10,
									max: 4400,
									range: "min",
									slide: function(event, ui) {
									if ((mbNr != '') && (spNr != '')){

									//var rUrl = '&returnURL=' + url_array[0];
									//console.log(link);
											var vsu = '&vsu=' + ui.value;
											if(document.getElementById("BtnKautelFun").getAttribute("style")){
												var callBgt = '<?php echo $callBgT; ?>' + vsu;
											}else{
												var callBgt = '<?php echo $callBgT; ?>' + vsu + link;
											}											
									} else{
									//var rUrl = '?returnURL=' + url_array[0];
									//console.log(link);
											var vsu = ui.value;
											if(document.getElementById("BtnKautelFun").getAttribute("style")){
												var callBgt = '<?php echo $callBgT; ?>' + vsu;
											}else{
												var callBgt = '<?php echo $callBgT; ?>' + vsu + link;
											}												
									}
									jQuery("#bruttoeinkommen").val(ui.value);
											jQuery(".KautelPrice").val(ui.value);
											var left = jQuery(".ui-slider-handle").css("left");
											left_text = left.replace("px", "") - 49;
											//alert(left_text);
											//var left2 = left - (35 + 'px');
											jQuery('.KautelPrice').css('left', left_text);
											jQuery('.kautel17Privat').attr('href', callBgt);
									}
								});
								jQuery(".percentClass").on("change", function () {
									var $this = jQuery(this),
									value = $this.prop("value");
									jQuery(".KautelPrice").val(value);
									var left = jQuery(".ui-slider-handle").css("left");
									jQuery('.KautelPrice').css('left', left);
									if ((mbNr != '') && (spNr != '')){
										var vsu = '&vsu=' + value;
										if(tab2Active){
											var callBgt2 = '<?php echo $callBgT2; ?>' + vsu + link;
										}else{
											if(document.getElementById("BtnKautelFun").getAttribute("style")){
												var callBgt = '<?php echo $callBgT; ?>' + vsu ;
											}else{
												var callBgt = '<?php echo $callBgT; ?>' + vsu + link;
											}											
										}											
									} else{
										var vsu = value;
										if(tab2Active){
											var callBgt2 = '<?php echo $callBgT2; ?>' + vsu + link;
										}else{
											if(document.getElementById("BtnKautelFun").getAttribute("style")){
												var callBgt = '<?php echo $callBgT; ?>' + vsu;
											}else{
												var callBgt = '<?php echo $callBgT; ?>' + vsu + link;
											}											
										}											
									}
									if(tab2Active){
										jQuery('.kautel17Privat').attr('href', callBgt2);
									}else{
										jQuery('.kautel17Privat').attr('href', callBgt);
									}
								});
								jQuery("input.percentClass").change(function () {
									var value = this.value;
									jQuery("#Rangeslider, #Rangeslider2").slider("value", parseInt(value));
								});		

								// 2nd tab									
								jQuery("#Rangeslider2").slider({
									value:fr1,
									value:10,
									min: 2500,
									step: 10,
									max: 25000,
									range: "min",
									slide: function(event, ui) {
									//link = '&zw=2';
									console.log('link-->', link);
									if ((mbNr != '') && (spNr != '')){

									//var rUrl = '&returnURL=' + url_array[0];
											var vsu = '&vsu=' + ui.value;
											var callBgt2 = '<?php echo $callBgT2; ?>' + vsu + link;
									} else{
									//var rUrl = '?returnURL=' + url_array[0];
											var vsu = ui.value;
											//var callBgt2 = '<?php echo $callBgT2; ?>' + vsu + link;	
                                      const element = document.getElementById("secondTab");
                                  if (element) {
                                    var callBgt2 = '<?php echo $callBgT2; ?>' + vsu;	
                                  }else{
                                    var callBgt2 = '<?php echo $callBgT2; ?>' + vsu + link;	
                                  }
									}
									jQuery("#bruttoeinkommen2").val(ui.value);
											jQuery(".KautelPrice").val(ui.value);
											var left = jQuery(".ui-slider-handle").css("left");
											left_text = left.replace("px", "") - 49;
											//alert(left_text);
											//var left2 = left - (35 + 'px');
											jQuery('.KautelPrice').css('left', left_text);
											//jQuery('.kautel17Privat').attr('href', callBgt);
											jQuery('.kautel17Privat').attr('href', callBgt2);
									}
								});
							})     
	</script>	
    </body>
</html>
