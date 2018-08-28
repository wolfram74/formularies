var peter_equations = [

  {
    equation:`
    d\\mathcal{f}(\\vec x) = \\nabla \\mathcal{f}(\\vec x) \\cdot d\\vec x
    `,
    id:"01.046",
    bookPage:"25",
    label:"NA",
    description:"more compact version of 1.45",
  },

  {
    equation:`
    \\mathcal{f}(\\vec x) - \\mathcal{f_0}(\\vec x_0) =
    \\int_C \\nabla \\mathcal{f}(\\vec x) \\cdot d\\vec x
    `,
    id:"01.047",
    bookPage:"26",
    label:"NA",
    description:"integral relating to a change in state",
  },

  {
    equation:`
    \\mathcal{f}(\\vec x) - \\mathcal{f_0}(\\vec x_0) =
    \\int_0^1 dt \\nabla \\mathcal{f}(\\vec x(t)) \\cdot \\frac{d\\vec x}{dt}
    `,
    id:"01.048",
    bookPage:"26",
    label:"NA",
    description:"Reducing the dimensionality of the integral to 1",
  },

  {
    equation:`\\nabla \\times \\vec F = \\vec 0`,
    id:"01.049",
    bookPage:"26",
    label:"NA",
    description:"A criterion for total differentiability",
  },

  {
    equation:`
    \\partial_y F_z-\\partial_z F_y=
    \\partial_z F_x-\\partial_x F_z=
    \\partial_x F_y-\\partial_y F_x=
    0
    `,
    id:"01.050",
    bookPage:"26",
    label:"NA",
    description:"expanded form of 1.51",
  },

  {
    equation:`
    \\vec F= \\nabla f
    \\\\
    \\partial_{e_i}\\partial_{e_j} f-\\partial_{e_j}\\partial_{e_i} f=
    0
    `,
    id:"01.051",
    bookPage:"26",
    label:"NA",
    description:"criterion for when 1.50 holds, order of differentiation is indepdent",
  },

  {
    equation:`
    \\vec F \\cdot d\\vec x = yxdx+x^2dy
    \\\\
    \\partial_y F_x-\\partial_x F_y=
    \\partial_y yx-\\partial_x x^2=
    x-2x= -x
    `,
    id:"01.052",
    bookPage:"27",
    label:"NA",
    description:"an example of an inexact differential",
  },

  {
    equation:`
    \\vec F \\cdot d\\vec x = ydx+xdy
    \\\\
    \\partial_y F_x-\\partial_x F_y=
    \\partial_y y-\\partial_x x=
    0
    `,
    id:"01.053",
    bookPage:"27",
    label:"NA",
    description:"an example of an exact differential",
  },

  {
    equation:`
    f(x,y) - f_0(x_0,y_0)
    \\\\
    =
    \\int_0^1(
      (y_0+t(y-y_0))(x-x0)
      +(x_0+t(x-x_0))(y-y0)
      )
    \\\\
    =
    y_0(x-x0)+1/2(y-y_0)(x-x0)
    +x_0(y-y0)+1/2(x-x_0)(y-y0)
    \\\\
    =xy-x_0y_0
    `,
    id:"01.054",
    bookPage:"27",
    label:"NA",
    description:"calculating the change in a quantity over a path",
  },

  {
    equation:`
    \\partial_{x_i}(g(\\vec x)F_k(\\vec x))
    =
    \\partial_{x_k}(g(\\vec x)F_i(\\vec x))
    `,
    id:"01.055",
    bookPage:"28",
    label:"NA",
    description:"a series of n differential equations to modify an inexact differential into an exact differential. g is referred to as the integrating factor.",
  },

  {
    equation:`
    \\partial_x(g(x,y) x^2) = \\partial_y(g(x,y)xy)
    `,
    id:"01.056",
    bookPage:"28",
    label:"NA",
    description:"beginning to fix the inexact differential from eq1.52",
  },

  {
    equation:`
    g(x,y)=g_1(x)g_2(y)
    \\\\
    1 + \\frac{x}{g_1} \\frac{d}{dx}g_1=
    \\frac{y}{g_2} \\frac{d}{dy}g_2
    `,
    id:"01.057",
    bookPage:"29",
    label:"NA",
    description:"continuing to find the integrating factor",
  },

  {
    equation:`ex6`,
    id:"01.058",
    bookPage:"29",
    label:"NA",
    description:"NA",
  },

  {
    equation:`ex6`,
    id:"01.059",
    bookPage:"30",
    label:"NA",
    description:"NA",
  },

  {
    equation:`ex6`,
    id:"01.060",
    bookPage:"30",
    label:"NA",
    description:"NA",
  },

  {
    equation:`ex6`,
    id:"01.061",
    bookPage:"30",
    label:"NA",
    description:"NA",
  },

  {
    equation:`ex6`,
    id:"01.062",
    bookPage:"31",
    label:"NA",
    description:"NA",
  },
]
