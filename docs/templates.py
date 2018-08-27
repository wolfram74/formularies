equation_template = '''
  {
    equation:`NA`,
    id:"%02d.%03d",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },
'''
view_template = '''
<html>
<head>
  <title>Chapter %02d</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h2>Equations in chapter %02d</h2>
  <div>
    <div id='mainList'>
      <equation-list></equation-list>
    </div>
  </div>
</body>
<script type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
<script type="text/javascript" src='../../scripts/vue@2.2.1.js'></script>
%s
<script type="text/javascript" src='./stitcher.js'></script>
<script type="text/javascript" src='../../scripts/runner.js'></script>
<link rel='stylesheet' type="text/css" href='../../scripts/styles.css'>

</html>
'''
stitcher_template = '''
var equations = []
'''
