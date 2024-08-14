
// ██████╗██╗   ██╗███████╗████████╗ ██████╗ ███╗   ███╗    ██████╗ ██╗     ██╗   ██╗ ██████╗ ██╗███╗   ██╗
// ██╔════╝██║   ██║██╔════╝╚══██╔══╝██╔═══██╗████╗ ████║    ██╔══██╗██║     ██║   ██║██╔════╝ ██║████╗  ██║
// ██║     ██║   ██║███████╗   ██║   ██║   ██║██╔████╔██║    ██████╔╝██║     ██║   ██║██║  ███╗██║██╔██╗ ██║
// ██║     ██║   ██║╚════██║   ██║   ██║   ██║██║╚██╔╝██║    ██╔═══╝ ██║     ██║   ██║██║   ██║██║██║╚██╗██║
// ╚██████╗╚██████╔╝███████║   ██║   ╚██████╔╝██║ ╚═╝ ██║    ██║     ███████╗╚██████╔╝╚██████╔╝██║██║ ╚████║
//  ╚═════╝ ╚═════╝ ╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝    ╚═╝     ╚══════╝ ╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═══╝
                                                                                                         

const plugin = require('tailwindcss/plugin')

//                 _ _       _                         _ _                  
//                | (_)     | |                       | (_)            _    
//   ____ ____  _ | |_  ____| |    ____  ____ ____  _ | |_  ____ ____ | |_  
//  / ___) _  |/ || | |/ _  | |   / _  |/ ___) _  |/ || | |/ _  )  _ \|  _) 
// | |  ( ( | ( (_| | ( ( | | |  ( ( | | |  ( ( | ( (_| | ( (/ /| | | | |__ 
// |_|   \_||_|\____|_|\_||_|_|   \_|| |_|   \_||_|\____|_|\____)_| |_|\___)
//                               (_____|                                    

const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        // map to bg-radient-[*]
        'bg-radient': value => ({
          'background-image': `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme('radialGradients') }
    )
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  }
)

/**
 * utility class presets
 */
function _presets() {
  const shapes = ['circle', 'ellipse'];
  const pos = {
    c: 'center',
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right',
    tl: 'top left',
    tr: 'top right',
    bl: 'bottom left',
    br: 'bottom right',
  };
  let result = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

// --------------------------------------------

//  _                                       _             _       
// (_)                        _            | |           (_)      
//  _ ____  ____   ___   ____| |_     ____ | |_   _  ____ _ ____  
// | |    \|  _ \ / _ \ / ___)  _)   |  _ \| | | | |/ _  | |  _ \ 
// | | | | | | | | |_| | |   | |__   | | | | | |_| ( ( | | | | | |
// |_|_|_|_| ||_/ \___/|_|    \___)  | ||_/|_|\____|\_|| |_|_| |_|
//         |_|                       |_|           (_____|        

// This is the import method in https://play.tailwindcss.com/aIdrzr64J3

// /** @type {import('tailwindcss').Config} */
// export default {
//   plugins: [radialGradientPlugin],
// }

// This is the import method for this project

module.exports = radialGradientPlugin;

