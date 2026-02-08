const gsd = document.getElementById('gsd');
const typeOfDrone = document.getElementById('typeOfDrone');
const result = document.getElementById('result');

const mavic = {sensor_L: 0.0173333, sensor_H: 0.013,
            L_pixels:5280, H_pixels:3956,
            focal_length: 0.012 
            }; //単位:メートル


function show_result(){
    const gsd_v = gsd.options[gsd.selectedIndex].value;
    const sensor_L = mavic.sensor_L;
    const L_pixels = mavic.L_pixels;
    const focal_length = mavic.focal_length;

    const cal = (gsd_v/(sensor_L/L_pixels))*focal_length;
    let ans = cal.toFixed(3);

    result.textContent = `Mavic3E　の最大飛行高度は ${ans}_m　です。`;
};