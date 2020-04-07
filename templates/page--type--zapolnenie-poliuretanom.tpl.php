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
      <div id="content-columns">  
        <div id="content-column-left"><?php print render($page['content_left']) ?></div>
        <div id="content-column-right">
          <?php print render($page['column_right_title']) ?>
          <?php print render($page['content_top']) ?>
          <?php print render($page['content']); ?>
        </div>
      </div>
    </main>
  </div> 
</div>

<footer id="footer">
  <div class="container"><?php print render($page['footer']) ?></div>
</footer>

<div id="mobile-panel">
  <?php print render($page['mobile_panel']) ?>
</div>
