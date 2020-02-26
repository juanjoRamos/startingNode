// jshint esversion:8

module.exports = function checkAddress(pathname) {
  if (pathname === '/' || pathname === '/overview.html') {
    return 0;
  }
  if (pathname === '/user.html') {
    return 1;
  }
  if (pathname === '/api') {
    return 2;
  }
  return -1;
};
