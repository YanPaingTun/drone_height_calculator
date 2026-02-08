const gsd = document.getElementById('gsd');
const drone = document.getElementById('Drone');
const result = document.getElementById('result');

const mavic = {sensor_L: 0.0173333, sensor_H: 0.013,
            L_pixels:5280, H_pixels:3956,
            focal_length: 0.012 
            }; //単位:メートル
const phantom4 = {sensor_L: 0.0132, sensor_H: 0.088,
            L_pixels:5472, H_pixels:3648,
            focal_length: 0.0088
            }; //単位:メートル

function calculate(){

    const drone_v = drone.options[drone.selectedIndex].value;
    if (drone_v == 'Mavic3E'){
        const gsd_v = gsd.options[gsd.selectedIndex].value;
        const sensor_L = mavic.sensor_L;
        const L_pixels = mavic.L_pixels;
        const focal_length = mavic.focal_length;

        const cal = (gsd_v/(sensor_L/L_pixels))*focal_length;
        let ans = cal.toFixed(3);
        result.innerHTML = `${drone_v}　の最大撮影高度は ${ans}_m　です。`;
    }
    else if (drone_v == 'Phantom4'){
    const gsd_v = gsd.options[gsd.selectedIndex].value;
    const sensor_L = phantom4.sensor_L;
    const L_pixels = phantom4.L_pixels;
    const focal_length = phantom4.focal_length;

    const cal = (gsd_v/(sensor_L/L_pixels))*focal_length;
    let ans = cal.toFixed(3);
    result.innerHTML = `${drone_v}　の最大撮影高度は ${ans}_m　です。`;
    }
    else{
    result.innerHTML = `Drone　の最大撮影高度は <br> 計算出来ません！`;
    }

};