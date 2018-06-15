var equations = [

  {
    equation:`
    \\jmath \\equiv
    \\nabla \\xi^1
    \\cdot \\nabla \\xi^2
    \\times \\nabla \\xi^3 = det(\\frac{\\partial \\xi^i}{\\partial x^j})
    `,
    id:"02.001",
    bookPage:"20",
    label:"Jacobian definition",
    description:"must be non-0 for a system of coordinates to be non-degenerate",
  },

  {
    equation:`
    R = (x^2 +y^2)^(1/2)
    \\\\
    \\phi = arcTan(y/x)
    \\\\
    Z = z
    `,
    id:"02.002",
    bookPage:"20",
    label:"Cylindrical coordinates",
    description:"Cylindrical coordinates in terms of cartesian, has a jacobian of 1/R",
  },

  {
    equation:`
    r_0 = ((R-R_0)^2 +Z^2)^(1/2)
    \\\\
    \\zeta_0 = arcTan(\\frac{Z}{R-R_0})
    \\\\
    \\eta_0 = -\\phi
    `,
    id:"02.003",
    bookPage:"20",
    label:"Primitive toroidal coordinates",
    description:"The Primitive toroidal coordinates in terms of Cylindrical coordinates. Jacobian is $&1/(r_0R)&$, $&R_0&$ is the major radius, distance from z-axis",
  },

  {
    equation:`
    \\jmath =
    \\nabla \\psi
    \\cdot \\nabla \\theta
    \\times \\nabla \\zeta    `,
    id:"02.004",
    bookPage:"20",
    label:"jacobian for general toroidal coordinates",
    description:"assumed to be positive finite everywhere for well behavedness",
  },

  {
    equation:`
    \\theta(r_0, \\theta_0 + 2m\\pi, \\zeta_0+2n\\pi) =
    \\theta(r_0, \\theta_0 , \\zeta_0) + 2m\\pi
    \\\\
    \\zeta(r_0, \\theta_0 + 2m\\pi, \\zeta_0+2n\\pi) =
    \\zeta(r_0, \\theta_0 , \\zeta_0) + 2n \\pi
    `,
    id:"02.005",
    bookPage:"21",
    label:"Periodicity constraints on angular components",
    description:"single valuedness on any finite loop, degenerate by integer turns at given points",
  },

  {
    equation:`
    \\psi(r_0, \\theta_0 + 2m\\pi, \\zeta_0+2n\\pi)
    =
    \\psi(r_0, \\theta_0 , \\zeta_0)
    `,
    id:"02.006",
    bookPage:"21",
    label:"constraints on general radial coordinate",
    description:"must be single valued regardless of lap",
  },

  {
    equation:`
    \\theta = \\theta_0 + p_1(r_0,\\theta_0, \\zeta_0)
    \\\\
    \\zeta = \\zeta_0 + p_2(r_0,\\theta_0, \\zeta_0)

    `,
    id:"02.007",
    bookPage:"21",
    label:"form of general angular coordinates",
    description:"periodic functions can be appended to primitive coordinate to generate arbitrary coordinates",
  },

  {
    equation:`
    \\vec A =
    A_1 \\hat x +
    A_2 \\hat y +
    A_3 \\hat z
    `,
    id:"02.008",
    bookPage:"22",
    label:"cartesian components",
    description:"most conventional basis",
  },

  {
    equation:`\\vec A = A_i \\nabla \\xi^i`,
    id:"02.009",
    bookPage:"22",
    label:"Covariant representation",
    description:"NA",
  },

  {
    equation:`
    A_i = \\frac{\\epsilon_{ijk}}{2\\jmath}
    \\nabla \\xi^j \\times \\nabla \\xi ^k \\cdot \\vec A
    \\\\
    A_1 = \\frac{1}{\\jmath} \\nabla \\xi^2 \\times \\nabla \\xi ^3 \\cdot \\vec A
    `,
    id:"02.010",
    bookPage:"22",
    label:"Covariant component",
    description:"a general covariant vector component using levi-civita notation and an explicit example",
  },

  {
    equation:`\\tilde A_j = A_i \\frac{\\partial \\xi^i}{\\partial \\tilde \\xi^j}`,
    id:"02.011",
    bookPage:"23",
    label:"covariant transform",
    description:"How to transform a covariant vector component",
  },

  {
    equation:`(\\nabla x^k)_j = \\delta_{ki} \\frac{\\partial x^i}{\\partial \\xi ^j}`,
    id:"02.012",
    bookPage:"23",
    label:"Basis vector covariant transform",
    description:"NA",
  },

  {
    equation:`A^i = \\vec A \\cdot \\nabla \\xi^i`,
    id:"02.013",
    bookPage:"23",
    label:"Contra variant component",
    description:"NA",
  },

  {
    equation:`
    \\tilde A^j = A^i \\frac{\\partial \\tilde \\xi^j}{\\partial \\xi^i}
    `,
    id:"02.014",
    bookPage:"23",
    label:"contra variant transform",
    description:"NA",
  },

  {
    equation:`
    \\vec A = \\frac{1}{\\jmath}(
      A^1\\nabla\\xi^2\\times \\nabla \\xi ^3
      +A^2\\nabla\\xi^3\\times \\nabla \\xi ^1
      +A^3\\nabla\\xi^1\\times \\nabla \\xi ^2
      )=
    \\\\
    \\frac{\\epsilon_{ijk}}{2\\jmath}
    A^i\\nabla\\xi^j\\times \\nabla \\xi ^k
    `,
    id:"02.015",
    bookPage:"23",
    label:"expanding in covariant basis",
    description:"NA",
  },

  {
    equation:`A^i = A_j \\nabla \\xi^i \\cdot \\nabla \\xi^j
    \\equiv g^{ij}A_j
    `,
    id:"02.016",
    bookPage:"24",
    label:"Relating covariant and contravariant components",
    description:"produced from combining equations 9 and 13",
  },

  {
    equation:`
    g^{ij}
    \\equiv
    \\nabla \\xi^i \\cdot \\nabla \\xi^j
    =
    \\frac{\\partial \\xi ^i}{\\partial x^k}
    \\frac{\\partial \\xi ^j}{\\partial x^k}
    `,
    id:"02.017",
    bookPage:"24",
    label:"definition of the contravariant metric tensor",
    description:"NA",
  },

  {
    equation:`A_i=g_{ij}A^j`,
    id:"02.018",
    bookPage:"24",
    label:"additional constraint for covariant metric",
    description:"NA",
  },

  {
    equation:`
    g_{ij}
    =
    \\frac{\\partial x^k}{\\partial \\xi ^i}
    \\frac{\\partial x^k}{\\partial \\xi ^j}
    `,
    id:"02.019",
    bookPage:"24",
    label:"expression for the covariant metric tensor",
    description:"NA",
  },

  {
    equation:`g = \\frac{1}{\\jmath^2}`,
    id:"02.020",
    bookPage:"24",
    label:"NA",
    description:"NA",
  },

  {
    equation:`
    d^3x = g^{1/2} d\\xi^1 d\\xi^2 d\\xi^3
    \\\\
    ds^2=g_{ij} d\\xi^i d\\xi^j
    `,
    id:"02.021",
    bookPage:"24",
    label:" general Volume and length elements",
    description:"NA",
  },

  {
    equation:`
    \\vec A \\cdot \\vec B =
     A_i \\nabla \\xi^i \\cdot \\nabla \\xi^j B_j =
     A_i g^{ij}  B_j =
     A_i B^j
    `,
    id:"02.022",
    bookPage:"24",
    label:"generalizing dot product",
    description:"NA",
  },

  {
    equation:`W^i =
    \\nabla \\xi^i
    \\cdot \\nabla \\xi^j
    \\times \\nabla \\xi^k  A_j B_k=
    \\jmath \\epsilon_{ijk} A_j B_k `,
    id:"02.023",
    bookPage:"24",
    label:"generalizing the cross product as contravariant vectors",
    description:"NA",
  },

  {
    equation:`W_i = \\frac{\\epsilon_{ijk}}{\\jmath} A^j B^k`,
    id:"02.024",
    bookPage:"25",
    label:"Covariant components of cross product",
    description:"NA",
  },

  {
    equation:`\\nabla = \\nabla \\xi^i \\frac{\\partial}{\\partial\\xi^i}`,
    id:"02.025",
    bookPage:"25",
    label:"gradient of a scalar",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.026",
    bookPage:"25",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.027",
    bookPage:"25",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.028",
    bookPage:"25",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.029",
    bookPage:"25",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.030",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.031",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.032",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.033",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.034",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.035",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.036",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.037",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.038",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.039",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.040",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.041",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.042",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.043",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.044",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.045",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.046",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.047",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.048",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.049",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.050",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.051",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.052",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.053",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.054",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.055",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.056",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.057",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.058",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.059",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.060",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.061",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.062",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.063",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.064",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.065",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.066",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.067",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.068",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.069",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.070",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.071",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.072",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.073",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.074",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.075",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.076",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.077",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.078",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.079",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.080",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.081",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.082",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.083",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.084",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.085",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.086",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.087",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.088",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.089",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.090",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.091",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.092",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.093",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.094",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.095",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.096",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.097",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.098",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },

  {
    equation:`NA`,
    id:"02.099",
    bookPage:"NA",
    label:"NA",
    description:"NA",
  },
]
