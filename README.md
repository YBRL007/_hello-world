<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <div class="jumbotron">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p> 
  </div>
  <div class="row">
    <div class="col-sm-4">
      <h3>Column 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
    <div class="col-sm-4">
      <h3>Column 3</h3>        
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
    </div>
  </div>
</div>

<div class="container-fluid">
  <h1>Hello World!</h1>
  <p>Resize the browser window to see the effect.</p>
  <div class="row">
    <div class="col-sm-4" style="background-color:lavender;">.col-sm-4</div>
    <div class="col-sm-4" style="background-color:lavenderblush;">.col-sm-4</div>
    <div class="col-sm-4" style="background-color:lavender;">.col-sm-4</div>
  </div>
</div>

<div class="container">
  <h1>h1 Bootstrap heading (36px)</h1>
  <h2>h2 Bootstrap heading (30px)</h2>
  <h3>h3 Bootstrap heading (24px)</h3>
  <h4>h4 Bootstrap heading (18px)</h4>
  <h5>h5 Bootstrap heading (14px)</h5>
  <h6>h6 Bootstrap heading (12px)</h6>
</div>

<div class="container">
  <h1>Lighter, Secondary Text</h1>
  <p>The small element is used to create a lighter, secondary text in any heading:</p>       
  <h1>h1 heading <small>secondary text</small></h1>
  <h2>h2 heading <small>secondary text</small></h2>
  <h3>h3 heading <small>secondary text</small></h3>
  <h4>h4 heading <small>secondary text</small></h4>
  <h5>h5 heading <small>secondary text</small></h5>
  <h6>h6 heading <small>secondary text</small></h6>
</div>

<div class="container">
  <h1>Highlight Text</h1>    
  <p>Use the mark element to <mark>highlight</mark> text.</p>
</div>

<div class="container">
  <h1>Abbreviations</h1>
  <p>The abbr element is used to mark up an abbreviation or acronym:</p>
  <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
</div>

<div class="container">
  <h1>Blockquotes</h1>
  <p>The blockquote element is used to present content from another source:</p>
  <blockquote>
    <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
    <footer>From WWF's website</footer>
  </blockquote>
</div>

<div class="container">
  <h1>Blockquotes</h1>
  <p>To show the quote on the right use the class .blockquote-reverse:</p>
  <blockquote class="blockquote-reverse">
    <p>For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.</p>
    <footer>From WWF's website</footer>
  </blockquote>
</div>

<div class="container">
  <h1>Description Lists</h1>    
  <p>The dl element indicates a description list:</p>
  <dl>
    <dt>Coffee</dt>
    <dd>- black hot drink</dd>
    <dt>Milk</dt>
    <dd>- white cold drink</dd>
  </dl>     
</div>

<div class="container">
  <h1>Code Snippets</h1>
  <p>Inline snippets of code should be embedded in the code element:</p>
  <p>The following HTML elements: <code>span</code>, <code>section</code>, and <code>div</code> defines a section in a document.</p>
</div>

<div class="container">
  <h1>Keyboard Inputs</h1>
  <p>To indicate input that is typically entered via the keyboard, use the kbd element:</p>
  <p>Use <kbd>ctrl + p</kbd> to open the Print dialog box.</p>
</div>

<div class="container">
<h1>Multiple Code Lines</h1>
<p>For multiple lines of code, use the pre element:</p>
<pre>
Text in a pre element
is displayed in a fixed-width
font, and it preserves
both      spaces and
line breaks.
</pre>
</div>

<div class="container">
  <h2>Contextual Colors</h2>
  <p>Use the contextual classes to provide "meaning through colors":</p>
  <p class="text-muted">This text is muted.</p>
  <p class="text-primary">This text is important.</p>
  <p class="text-success">This text indicates success.</p>
  <p class="text-info">This text represents some information.</p>
  <p class="text-warning">This text represents a warning.</p>
  <p class="text-danger">This text represents danger.</p>
</div>

<div class="container">
  <h2>Contextual Backgrounds</h2>
  <p>Use the contextual background classes to provide "meaning through colors":</p>
  <p class="bg-primary">This text is important.</p>
  <p class="bg-success">This text indicates success.</p>
  <p class="bg-info">This text represents some information.</p>
  <p class="bg-warning">This text represents a warning.</p>
  <p class="bg-danger">This text represents danger.</p>
</div>

<div class="container">
  <h2>Typography</h2>
  <p>Use the .lead class to make a paragraph "stand out":</p>
  <p class="lead">This paragraph stands out.</p>
  <p>This is a regular paragraph.</p>
</div>

<div class="container">
      <h2>Typography</h2>
      <p>Use the .small class to make the text smaller:</p>
      <p class="small">This paragraph is smaller.</p>
      <p>This is a regular paragraph.</p>
</div>

<div class="container">
  <h2>Typography</h2>
  <p class="text-left">Left-aligned text.</p>
  <p class="text-right">Right-aligned text.</p>      
  <p class="text-center">Center-aligned text.</p>
  <p class="text-justify">Justified text. Justified text. Justified text. Justified text. Justified text. Justified text.</p>      
  <p class="text-nowrap">No wrap text. No wrap text. No wrap text. No wrap text.</p>
  <p><strong>Tip:</strong> Try to resize the browser window to see the behaviour of justify and nowrap.</p>      
</div>

<div class="container">
  <h2>Typography</h2>
  <p class="text-lowercase">Lowercased text.</p>
  <p class="text-uppercase">Uppercased text.</p>      
  <p class="text-capitalize">Capitalized text.</p>
</div>

<div class="container">
  <h2>Typography</h2>
  <p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948. (normal abbr)</p>      
  <p>The <abbr title="World Health Organization" class="initialism">WHO</abbr> was founded in 1948. (slightly smaller abbr)</p>
</div>

<div class="container">
  <h2>Typography</h2>
  <p>The class .list-unstyled removes the default list-style and left margin on list items (immediate children only):</p>
  <ul class="list-unstyled">
    <li>Coffee</li>
    <li>Tea
      <ul>
        <li>Black tea</li>
        <li>Green tea</li>
      </ul>
    </li>
    <li>Milk</li>
  </ul>
</div>

<div class="container">
  <h2>Typography</h2>
  <p>The class .list-inline places all list items on a single line:</p>
  <ul class="list-inline">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
</div>

<div class="container">
  <h2>Typography</h2>
  <p>Use the .dl-horizontal class line up the description list side-by-side when the browser window expands:</p>
  <dl class="dl-horizontal">
    <dt>Coffee</dt>
    <dd>- black hot drink</dd>
    <dt>Milk</dt>
    <dd>- white cold drink</dd>
  </dl>     
  <p><strong>Tip:</strong> Try to resize the browser window to see the behaviour of the description list.</p>      
</div>

<div class="container">
  <h2>Code</h2>    
     
  <p>For multiple lines of code, use the pre element:</p>
  <pre>Text in a pre element
  is displayed in a fixed-width
  font, and it preserves
  both      spaces and
  line breaks.</pre>

  <p>If you add the .pre-scrollable class, the pre element gets a max-height of 350px and provides a y-axis scrollbar:</p>
  <pre class="pre-scrollable">Text in a pre element
  is displayed in a fixed-width
  font, and it preserves
  both      spaces and
  line breaks.</pre>
</div>

<div class="container">
  <h2>Basic Table</h2>
  <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>            
  <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="container">
  <h2>Striped Rows</h2>
  <p>The .table-striped class adds zebra-stripes to a table:</p>            
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="container">
  <h2>Bordered Table</h2>
  <p>The .table-bordered class adds borders to a table:</p>            
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="container">
  <h2>Hover Rows</h2>
  <p>The .table-hover class enables a hover state on table rows:</p>            
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="container">
  <h2>Condensed Table</h2>
  <p>The .table-condensed class makes a table more compact by cutting cell padding in half:</p>            
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="container">
  <h2>Contextual Classes</h2>
  <p>Contextual classes can be used to color table rows or table cells. The classes that can be used are: .active, .success, .info, .warning, and .danger.</p>            
  <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr class="success">
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr class="danger">
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr class="info">
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>
</div>


</body>
</html>

