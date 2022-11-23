export const deviceInfo = () => {
  const device = navigator.userAgent;

  if (device.indexOf("iPad") > -1) {
    // ipad
    return {
      isLaptop: true,
    };
  } else if (device.indexOf("Android") > -1 || device.indexOf("ios") > -1) {
    // 手机
    return {
      isMobile: true,
    };
  } else {
    // 电脑
    return {
      isPC: true,
    };
  }
};
