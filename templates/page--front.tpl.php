<div id="overlay"></div>

<header id="header">
  <div class="container">
    <?php print render($page['header_left']); ?>    
    <?php print render($page['header_right']); ?>      
  </div>
</header>
    
<nav id="main-menu">
  <div class="container">
    <?php print render($page['main_menu']); ?>       
  </div>
</nav>

<div id="slider" class="container">
  <?php print render($page['slider']); ?> 
</div>   

<?php if (!empty($tabs['#primary'])): ?>
  <div class="container">
    <div class="tabs-wrapper">
      <?php print render($tabs); ?>      
    </div>
  </div>
<?php endif; ?>

<div id="wrapper">  
  <div class="container">   
    <?php if ($page['sidebar_first']): ?>
      <div id="sidebar">
        <?php print render($page['sidebar_first']); ?>
      </div>  
    <?php endif; ?>  
    <main id="main">
      <?php print $messages; ?>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?><h1 class="page-title"><?php print $title; ?></h1><?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
      <?php print render($page['content']); ?>
    </main>
  </div> 
</div> 

<footer id="footer">
  <div class="container"><?php print render($page['footer']) ?></div>
</footer>

<div id="mobile-panel">
  <?php print render($page['mobile_panel']) ?>
</div>