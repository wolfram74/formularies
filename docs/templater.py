'''
templater.py chap_num equation_count
chapter_number folders go inside of text_title folders which share level with scripts
'''
import sys
import os
import templates

chap_num, equation_count = [ int(num) for num in sys.argv[-2:]]
print(chap_num, equation_count)
collaborators = ['jacob', 'eric', 'peter']
sub_count = equation_count/len(collaborators)
remainder = equation_count % len(collaborators)

folder = "chap_%02d" % chap_num
os.mkdir(folder)
view = open(folder+'/view.html', 'w')
stitcher = open(folder + '/stitcher.js', 'w')
stitcher.write(templates.stitcher_template)
eqn_links = ''
for collab in collaborators:
  eqn_links += '''
  <script type="text/javascript" src='./%s_equations.js'></script>
  ''' % collab
view.write(templates.view_template % (chap_num, chap_num, eqn_links))
view.close()
for collab_index in range(len(collaborators)):
  collab = collaborators[collab_index]
  low_num = collab_index*sub_count
  high_num = (collab_index+1)*sub_count
  if collab == 'peter':
    high_num+=remainder
  equations = open(folder+'/%s_equations.js'%collab, 'w')
  equations.write('var %s_equations = [\n' % collab)
  for eqn_num in range(low_num, high_num):
      equations.write(templates.equation_template % (chap_num, eqn_num+1))
  equations.write(']')
  equations.close()
  stitcher.write('equations = equations.concat(%s_equations)\n'%collab)
stitcher.close()
