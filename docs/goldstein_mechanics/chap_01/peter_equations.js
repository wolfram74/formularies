var equations = [
//page 11 makes me think the type setting in the pdf is just rubbish
  {
    equation:`
    \\partial_{\\dot q_j} \\vec v_i
    = \\partial_{q_j}\\vec r_i
    `,
    id:"01.051",
    bookPage:"20",
    label:"NA",
    description:"a relationship between configuration velocities and cartesian velocities",
  },

  {
    equation:`\\Sigma(
      \\frac{d}{dt}(\\partial_{\\dot q_j}T)
      - \\partial_{q_j}T - Q_j
      )\\delta q_j=0`,
    id:"01.052",
    bookPage:"20",
    label:"NA",
    description:"NA",
  },

  {
    equation:`
    \\frac{d}{dt}(\\partial_{\\dot q_j}T)
      - \\partial_{q_j}T = Q_j`,
    id:"01.053",
    bookPage:"20",
    label:"NA",
    description:"n lagrange-ish equations",
  },

  {
    equation:`
    Q_j = -\\partial_{q_j} V
    `,
    id:"01.054",
    bookPage:"21",
    label:"NA",
    description:"general force expression from a scalar potential",
  },

  {
    equation:`
    \\frac{d}{dt}(\\partial_{\\dot q_j}T
    -\\partial_{q_j}(T-V)=0
    `,
    id:"01.055",
    bookPage:"21",
    label:"NA",
    description:"a reformulation of eq 53",
  },

  {
    equation:`L=T-V`,
    id:"01.056",
    bookPage:"21",
    label:"lagrangian",
    description:"defining the lagrangian",
  },

  {
    equation:`
      \\frac{d}{dt}(\\partial_{\\dot q_j}L)
      -\\partial_{q_j}L = 0
      \\\\
      L^\\prime(q, \\dot q, t) = L(q, \\dot q, t) + \\frac{dF}{dt}
    `,
    id:"01.057",
    bookPage:"21",
    label:"Lagrange equations",
    description:"another way to write eq 53 and a family of possible transformations",
  },

  {
    equation:`
    Q_j = -\\partial_{q_j} U + \\frac{d}{dt}(\\partial_{\\dot q_j}U)
    `,
    id:"01.058",
    bookPage:"22",
    label:"NA",
    description:"Including velocities in the potential",
  },

  {
    equation:`L=T-U`,
    id:"01.059",
    bookPage:"22",
    label:"NA",
    description:"lagrangian still valid",
  },

  {
    equation:`\\vec F = q(\\vec E + (\\vec v \\times \\vec B))`,
    id:"01.060",
    bookPage:"22",
    label:"Lorentz forcelaw",
    description:"an example of a velocity dependent force and implicitly a velocity dependent potential",
  },

  {
    equation:`
    \\vec E = -\\nabla \\phi - \\partial_t \\vec A
    \\\\
    \\vec B = - \\nabla \\times \\vec A

    `,
    id:"01.061",
    bookPage:"22",
    label:"Potential expressions for E and B",
    description:"Introducing a scalar and vector potential for electric and magnetic fields",
  },

  {
    equation:`U = q\\phi - q \\vec A \\cdot \\vec v`,
    id:"01.062",
    bookPage:"22",
    label:"EM potential energy",
    description:"A single scalar potential for a charged particle in an EM system",
  },

  {
    equation:`
    L = \\frac{1}{2}mv^2 - q\\phi + q \\vec A \\cdot \\vec v
    `,
    id:"01.063",
    bookPage:"22",
    label:"EM langrangian",
    description:"NA",
  },

  {
    equation:`
    m \\ddot x =
    q(
      v_x \\partial_x A_x
      +v_y \\partial_x A_y
      +v_z \\partial_x A_z
      )
    -q(\\partial_x\\phi - \\frac{dA_x}{dt})
    `,
    id:"01.064",
    bookPage:"23",
    label:"the lagrangian equation for x",
    description:"NA",
  },

  {
    equation:`
    \\frac{dA_x}{dt} =
    \\partial_t A_x + \\vec v \\cdot \\nabla A_x
    \\\\
    = \\partial_t A_x
    + v_x \\partial_x A_x
      +v_y \\partial_y A_y
      +v_z \\partial_z A_z
    `,
    id:"01.065",
    bookPage:"23",
    label:"NA",
    description:"NA",
  },

  {
    equation:`
    (\\vec V \\times \\vec B)_x =
    v_y(\\partial_x A_y-\\partial_y A_x)
    +v_z(\\partial_x A_z-\\partial_z A_x)
    \\\\
    m\\ddot x = q(E_x+(\\vec V \\times \\vec B)_x)
    `,
    id:"01.066",
    bookPage:"23",
    label:"NA",
    description:"demonstrating the equivalence of the lagrange equation and the lorentz force law",
  },

  {
    equation:`
    \\mathcal{F} = \\frac{1}{2}
    \\Sigma_i(
      k_xv_{ix}^2
      + k_yv_{iy}^2
      + k_zv_{iz}^2
      )
    `,
    id:"01.067",
    bookPage:"23",
    label:"rayleigh's dissipation function",
    description:"i is summed over the particles in the system",
  },

  {
    equation:`\\vec F_f = -\\nabla_v \\mathcal{F}`,
    id:"01.068",
    bookPage:"24",
    label:"NA",
    description:"A compact expression for friction forces from the dissipation function",
  },

  {
    equation:`
    Q_j
    = \\Sigma_i \\vec F_{f_i} \\cdot \\partial_{q_j}\\vec r_i
    = -\\Sigma \\nabla_v \\mathcal{F} \\cdot \\partial_{q_j}\\vec r_i
    \\\\
    = -\\Sigma \\nabla_v \\mathcal{F} \\cdot \\partial_{\\dot q_j}\\vec{\\dot r_i}
    \\\\
    = - \\partial_{\\dot q_j} \\mathcal{F}
    `,
    id:"01.069",
    bookPage:"24",
    label:"NA",
    description:"Generalized force of friction",
  },

  {
    equation:`
    \\frac{d}{dt}(\\partial_{\\dot q_j}L)
      -\\partial_{q_j}L + \\partial_{\\dot q_j} \\mathcal{F}= 0
    `,
    id:"01.070",
    bookPage:"24",
    label:"NA",
    description:"Lagrangians including non-conservative drags",
  },

  {
    equation:`
    T = M_0
    + \\Sigma_j M_j\\dot q_j
    +\\frac{1}{2}\\Sigma_{j,k} M_{jk} \\dot q_j \\dot q_k
    `,
    id:"01.071",
    bookPage:"25",
    label:"Generalized kinetic energy",
    description:"NA",
  },

  {
    equation:`
    M_0 = \\frac{1}{2}\\Sigma_i m_i (\\partial_t \\vec r_i)^2
    \\\\
    M_j = \\Sigma_i m_i \\partial_t \\vec r_i \\cdot \\partial_{q_j} \\vec r_i
    \\\\
    M_{jk} = \\Sigma_i m_i
    \\partial_{q_j} \\vec r_i \\cdot \\partial_{q_k} \\vec r_i
    `,
    id:"01.072",
    bookPage:"25",
    label:"NA",
    description:"expressing the mass-like quantities in terms of r.",
  },

  {
    equation:`T=T_0+T_1+T_2`,
    id:"01.073",
    bookPage:"25",
    label:"NA",
    description:"Kinetic energies in terms of powers of velocity.",
  },

  {
    equation:`
    \\partial_{\\dot x_i} T = m\\dot x_i
    \\\\
    \\frac{d}{dt}(m\\dot x_i) = F_{x_i}
    `,
    id:"01.074",
    bookPage:"26",
    label:"NA",
    description:"rederiving newtons equations of motion with cartesian coordinates",
  },

  {
    equation:`T=\\frac{1}{2}m(\\dot r^2+(r \\dot \\theta)^2`,
    id:"01.075",
    bookPage:"26",
    label:"NA",
    description:"kinetic energy in polar coordinates",
  },
]
