Condition
==========

gte IE 8 and firefox, chrome, safari, opera latest version

Usage
==========

    <link rel="stylesheet" href="style.css" media="all">
    <script src="jquery.js"></script>
    <script src="dorpdown.js"></script>
    <script>
    jQuery(function($) {
            $('#nav').dropdown();
            });
    </script>
    
    
    <body>
    <ul id="nav">
        <li>
            <ul class="sub-nav"><li>menu1-1</li></ul>
        </li>
    </ul>
    </body>

memo
==========
nested ul element style require min_width property
