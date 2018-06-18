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
    equation:`S_{,i}\\equiv (\\nabla S)_i = \\frac{\\partial S}{\\partial\\xi^i}`,
    id:"02.026",
    bookPage:"25",
    label:"Covariant derivative a scalar",
    description:"NA",
  },

  {
    equation:`
    \\frac{\\partial}{\\partial \\xi^j} \\vec A =
    \\frac{\\partial A_i}{\\partial \\xi^j} \\nabla \\xi ^i +
    A_i \\frac{\\partial}{\\partial \\xi^j} \\nabla \\xi ^i
    \\\\
    \\frac{\\partial \\vec A}{\\partial \\xi^j} = A_{i,j}\\nabla \\xi ^i
    `,
    id:"02.027",
    bookPage:"25",
    label:"Directional covariant derivative",
    description:"NA",
  },

  {
    equation:`
    A_{i,j} = (\\partial_{\\xi^j} \\vec A)_i=
    \\partial_{\\xi^j} A_i + \\Gamma_{ji}^k A_k
    `,
    id:"02.028",
    bookPage:"25",
    label:"another form of the directional derivative",
    description:"NA",
  },

  {
    equation:`\\Gamma_{ji}^k\\equiv (\\partial_{\\xi^j} \\nabla \\xi^k)_i`,
    id:"02.029",
    bookPage:"25",
    label:"definition of the christoffel symbol",
    description:"also known as affine connection",
  },

  {
    equation:`
    A^i_{,j}\\equiv
    (\\partial_{\\xi^j} \\vec A)^i=
    \\partial_{\\xi^j} A_i - \\Gamma_{jk}^i A^k
    `,
    id:"02.030",
    bookPage:"26",
    label:"the contravariant components of the directional derivative",
    description:"NA",
  },

  {
    equation:`
    \\Gamma^i_{jk} =
    -\\frac{1}{2} g^{im}(
      \\partial_{\\xi^j} g_{mi}+
      \\partial_{\\xi^i} g_{mj}-
      \\partial_{\\xi^m} g_{jk}
      )
    `,
    id:"02.031",
    bookPage:"26",
    label:"expressing the christoffel symbol in terms of the metric",
    description:"NA",
  },

  {
    equation:`
    \\nabla \\cdot \\vec A =
    \\nabla \\xi^m \\cdot \\partial_{\\xi^m}(
      \\frac{\\epsilon_{ijk}}{2\\jmath}
      A^i \\nabla \\xi^j
      \\times \\nabla \\xi^k
      )
    =
    \\jmath \\partial_{\\xi^i}(\\frac{1}{\\jmath}A^i)
    `,
    id:"02.032",
    bookPage:"26",
    label:"generic divergence",
    description:"NA",
  },

  {
    equation:`
    B^i =
    \\nabla\\xi^i \\cdot \\nabla\\xi^j \\times(
      \\partial_{\\xi^j}\\nabla\\xi^m A_m
      ) = \\jmath \\epsilon_{ijk}\\partial_{\\xi ^j}A_k
    `,
    id:"02.033",
    bookPage:"26",
    label:"generic curl",
    description:"NA",
  },

  {
    equation:`
    S[x]=\\int_{t_0}^{t_1}L(
      \\vec x(t),\\vec {\\dot{x}}(t),t
      ) dt
    `,
    id:"02.034",
    bookPage:"27",
    label:"Standard action integral",
    description:"NA",
  },

  {
    equation:`0 = -\\frac{d}{dt}\\partial_{\\dot x^i} L + \\partial_{x^i} L`,
    id:"02.035",
    bookPage:"27",
    label:"Euler lagrange equations",
    description:"NA",
  },

  {
    equation:`H(\\vec p, \\vec x) = \\vec p \\cdot \\vec {\\dot x}-
    L(
      \\vec x,\\vec {\\dot{x}},t
      )`,
    id:"02.036",
    bookPage:"27",
    label:"means of calculating hamiltonian",
    description:"NA",
  },

  {
    equation:`\\vec p = \\partial_{\\vec{\\dot x}} L`,
    id:"02.037",
    bookPage:"27",
    label:"conjugate momentum",
    description:"NA",
  },

  {
    equation:`
    S[\\vec p,\\vec x]=\\int_{t_0}^{t_1} (
      \\vec p \\cdot \\vec {\\dot x}-H(\\vec p, \\vec x,t)
      ) dt
    `,
    id:"02.038",
    bookPage:"28",
    label:"Phase space action integral",
    description:"NA",
  },

  {
    equation:`
    \\dot p^i = - \\partial_{x^i} H
    \\\\
    \\dot x^i = \\partial_{p^i} H
    `,
    id:"02.039",
    bookPage:"28",
    label:"Hamilton's equations of motion",
    description:"NA",
  },

  {
    equation:`S[\\vec z] =
    \\int_{t_0}^{t_1} (
      \\vec A(\\vec z) \\cdot \\vec {\\dot z}-H(\\vec z,t)
      ) dt
    `,
    id:"02.040",
    bookPage:"28",
    label:"Action integral in general coordinates",
    description:"NA",
  },

  {
    equation:`\\omega_{ij}\\dot z^j = \\partial_{z^i}H`,
    id:"02.041",
    bookPage:"29",
    label:"hamiltons equations of motion in general coordinates",
    description:"NA",
  },

  {
    equation:`\\omega_{ij}=\\partial_{z_i}A_j-\\partial_{z_j}A_i`,
    id:"02.042",
    bookPage:"29",
    label:"defining the weighting in general equations of motions",
    description:"NA",
  },

  {
    equation:`
    \\omega
    \\begin{bmatrix}
      \\vec {\\dot p}\\\\ \\vec {\\dot x}
    \\end{bmatrix}
    =
    \\begin{bmatrix}
      0 & \\hat I
      \\\\
      -\\hat I & 0
    \\end{bmatrix}

    \\begin{bmatrix}
      \\vec {\\dot p}\\\\ \\vec {\\dot x}
    \\end{bmatrix}
    `,
    id:"02.043",
    bookPage:"29",
    label:"the symplectic form in simplest form",
    description:"NA",
  },

  {
    equation:`
    L(
      \\vec x,\\vec {\\dot{x}},t
      ) = \\frac{m_s}{2}|\\dot x|^2-e_s \\Phi(\\vec x, t)
    +\\frac{e_s}{c} \\vec{\\dot x} \\cdot \\vec A(\\vec x, t)
    `,
    id:"02.044",
    bookPage:"29",
    label:"non-relativisitc E&M lagrangian",
    description:"NA",
  },

  {
    equation:`
      m\\frac{d^2\\vec x}{dt^2}
      = e\\vec E
      + \\frac{e}{c}\\frac{d\\vec x}{dt} \\times \\vec B
    `,
    id:"02.045",
    bookPage:"31",
    label:"the lorentz Force law",
    description:"NA",
  },

  {
    equation:`
    E_i =
    (-\\nabla \\Phi - \\frac{1}{c}\\partial_t A)_i=
    -\\partial_{x^i} \\Phi - \\frac{1}{c}\\partial_t A_i
    \\\\
    \\epsilon_{ijk} B^i
    = \\epsilon_{ijk}(\\nabla \\times \\vec A)^i
    = \\jmath (\\partial_{x^j} A_k - \\partial_{x^k} A_j)
    `,
    id:"02.046",
    bookPage:"31",
    label:"Defining fields in terms of potentials",
    description:"NA",
  },

  {
    equation:`\\vec p = m \\vec v +\\frac{e}{c}\\vec A`,
    id:"02.047",
    bookPage:"31",
    label:"Canonical momentum for charged particles",
    description:"NA",
  },

  {
    equation:`H=\\frac{1}{2m}|\\vec p - \\frac{e}{c} \\vec A|^2+e\\Phi`,
    id:"02.048",
    bookPage:"31",
    label:"E&M hamiltonian",
    description:"NA",
  },

  {
    equation:`
    \\nabla \\cdot \\vec E = 4\\pi \\rho_c
    \\\\
    \\nabla \\times \\vec B - \\frac{1}{c} \\partial_t \\vec E = \\frac{4\\pi}{c} \\vec J
    \\\\
    \\nabla \\times \\vec E  + \\frac{1}{c} \\partial_t \\vec B = 0
    \\\\
    \\nabla\\cdot \\vec B = 0
    `,
    id:"02.049",
    bookPage:"31",
    label:"Maxwell's equations",
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
