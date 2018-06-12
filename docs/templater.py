'''
templater.py chap_num equation_count
chapter_number folders go inside of text_title folders which share level with scripts
'''
import sys
import os
chap_num, equation_count = [ int(num) for num in sys.argv[-2:]]
print(chap_num, equation_count)

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
<script type="text/javascript" src='./equations.js'></script>
<script type="text/javascript" src='../../scripts/runner.js'></script>
<link rel='stylesheet' type="text/css" href='../../scripts/styles.css'>

</html>


'''

folder = "chap_%02d" % chap_num
os.mkdir(folder)
view = open(folder+'/view.html', 'w')
view.write(view_template % (chap_num, chap_num))
view.close()
equations = open(folder+'/equations.js', 'w')
equations.write('var equations = [\n')
for eqn_num in range(equation_count):
    equations.write(equation_template % (chap_num, eqn_num+1))
equations.write(']')
equations.close()
