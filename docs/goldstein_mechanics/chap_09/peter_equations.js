var peter_equations = [

  {
    equation:`\\dot q_i = \\partial_{\\alpha_i}H=\\omega_i`,
    id:"09.001",
    bookPage:"368",
    label:"NA",
    description:"Trivial case with all cyclic coordinates",
  },

  {
    equation:`q_i = \\omega_i t +\\beta_i`,
    id:"09.002",
    bookPage:"369",
    label:"NA",
    description:"solution to trivial case, highlight the differences between say, polar and cartesian that one would be trivial, the other less so",
  },

  {
    equation:`Q_i=Q_i(q,t)`,
    id:"09.003",
    bookPage:"369",
    label:"point transformation form",
    description:"NA",
  },

  {
    equation:`Q_i=Q_i(q,p,t) \\\\ P_i=P_i(q,p,t)`,
    id:"09.004",
    bookPage:"369",
    label:"Canonical transformation form",
    description:"NA",
  },

  {
    equation:`
    \\dot Q_i= \\partial_{P_i}K
    \\\\
    \\dot P_i= -\\partial_{Q_i}K
    `,
    id:"09.005",
    bookPage:"370",
    label:"recasted hamiltonian equations",
    description:"note they are still in the same form as untransformed hamiltonian equations, that's the whole point",
  },

  {
    equation:`
    \\delta \\int_{t_1}^{t_2}
    P_i\\dot Q_i - K
    dt=0
    `,
    id:"09.006",
    bookPage:"370",
    label:"extremum satisfaction",
    description:"NA",
  },

  {
    equation:`
    \\delta \\int_{t_1}^{t_2}
    p_i\\dot q_i - H
    dt=0
    `,
    id:"09.007",
    bookPage:"370",
    label:"extremum satisfaction",
    description:"NA",
  },

  {
    equation:`
    \\lambda(p_i \\dot q_i - H) = P_i \\dot Q_i - K +\\frac{dF}{dt}
    `,
    id:"09.008",
    bookPage:"370",
    label:"transformation relation",
    description:"If the two extrema are satisfied, this relationship also holds and is an equivalent constraint.",
  },

  {
    equation:`Q_i = \\mu q_i, P_i = \\nu p_i`,
    id:"09.009",
    bookPage:"371",
    label:"simple scale transform",
    description:"NA",
  },

  {
    equation:`\\mu \\nu(p_i \\dot q_i - H) = P_i \\dot Q_i - K +\\frac{dF}{dt}`,
    id:"09.010",
    bookPage:"371",
    label:"constraint",
    description:"since scale transforms are trivial, we'll ignore them and call any with lambda not =1 as extended canonical",
  },

  {
    equation:`p_i \\dot q_i - H = P_i \\dot Q_i - K +\\frac{dF}{dt}`,
    id:"09.011",
    bookPage:"371",
    label:"standard canonical transform constraint",
    description:"F is a some function of p, q, P, Q and t used to generate the transformation.",
  },

  {
    equation:`F=F_1(q, Q, t)`,
    id:"09.012",
    bookPage:"372",
    label:"NA",
    description:"NA",
  },

  {
    equation:`
    p_i \\dot q_i - H = P_i \\dot Q_i - K +\\frac{dF_1}{dt}
    \\\\
    = P_i \\dot Q_i - K + \\partial_t F_1
    + \\partial_{q_i} F_1 \\dot q_i
    + \\partial_{Q_i} F_1 \\dot Q_i
    `,
    id:"09.013",
    bookPage:"372",
    label:"assuming 9.12 is true",
    description:"NA",
  },

  {
    equation:`
    p_i = \\partial_{q_i} F_1
    \\\\
    P_i = -\\partial_{Q_i} F_1
    \\\\
    K= H + \\partial_t F_1
    `,
    id:"09.014",
    bookPage:"372",
    label:"providing some transforms",
    description:"using algebraic manipulations one typically recasts 9.4 into these forms and finds F",
  },

  {
    equation:`
    F = F_2(q, P,t) -Q_iP_i
    \\\\
    F = F_3(p, Q,t) -q_ip_i
    \\\\
    F = F_4(p, P,t) -q_ip_i -Q_iP_i
    `,
    id:"09.015",
    bookPage:"373",
    label:" 3 other basic generator functions",
    description:"Depending on whether or not the transformed coordinates are expressible as combinations of other things, different kinds of generating functions may be appropriate",
  },

  {
    equation:`
    p_i \\dot q_i - H = P_i \\dot Q_i - K +\\frac{dF_2}{dt}
    `,
    id:"09.016",
    bookPage:"373",
    label:"Using F2",
    description:"NA",
  },

  {
    equation:`
    p_i = \\partial_{q_i} F_2
    \\\\
    Q_i = \\partial_{P_i} F_2
    \\\\
    K= H + \\partial_t F_2
    `,
    id:"09.017",
    bookPage:"373",
    label:"The consequences of using F2",
    description:"NA",
  },

  {
    equation:`-P_i = \\partial_{Q_i} F_1`,
    id:"09.018",
    bookPage:"374",
    label:"part of converting from F1 to F2",
    description:"NA",
  },

  {
    equation:`F2 = F1 + P_iQ_i`,
    id:"09.019",
    bookPage:"374",
    label:"alternative way to define F2",
    description:"the other basic generating functions are essential legendre transforms of F1 but many variants exist",
  },

  {
    equation:`NA`,
    id:"09.020",
    bookPage:"374",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.021",
    bookPage:"374",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.022",
    bookPage:"374",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.023",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.024",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.025",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.026",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.027",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.028",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.029",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.030",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.031",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.032",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.033",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.034",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.035",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.036",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.037",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.038",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.039",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.040",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.041",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.042",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.043",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.044",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.045",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.046",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.047",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.048",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.049",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.050",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.051",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.052",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.053",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.054",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.055",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.056",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.057",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.058",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.059",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.060",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.061",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.062",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.063",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.064",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.065",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.066",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.067",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.068",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.069",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.070",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.071",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.072",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.073",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.074",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.075",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.076",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.077",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.078",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.079",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.080",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.081",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.082",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.083",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.084",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.085",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.086",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.087",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.088",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.089",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.090",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.091",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.092",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.093",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.094",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.095",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.096",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.097",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.098",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.099",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.100",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.101",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.102",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.103",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.104",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.105",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.106",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.107",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.108",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.109",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.110",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.111",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.112",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.113",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.114",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.115",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.116",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.117",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.118",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.119",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.120",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.121",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.122",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.123",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.124",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.125",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.126",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.127",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.128",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.129",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.130",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.131",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.132",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.133",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.134",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.135",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.136",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.137",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.138",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.139",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.140",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.141",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.142",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.143",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.144",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.145",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.146",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.147",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.148",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.149",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"09.150",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },
]
