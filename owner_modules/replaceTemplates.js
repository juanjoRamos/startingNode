// jshint esversion:8

/**
 * @module replaceTemplates;
 * @function parseTemplate;
 * @param {string} temp;
 * @param {Object} user;
 * @return {string} output;
 */
module.exports = function parseTemplate(temp, user) {
  let output = temp.replace(/{%USERID%}/g, user.id);
  output = output.replace(/{%USERNAME%}/g, user.name);
  output = output.replace(/{%USERSURNAME%}/g, user.surnames);
  output = output.replace(
    /{%user_identification_document%}/g,
    user.identification_document,
  );
  output = output.replace(/{%user_age%}/g, user.age);
  output = output.replace(/{%USERSTUDIES%}/g, user.applied_studies);
  output = output.replace(/{%user_nacionality%}/g, user.nationality);
  output = output.replace(
    /{%user_autonomous_community%}/g,
    user.autonomous_community,
  );
  output = output.replace(/{%user_province%}/g, user.province);
  output = output.replace(/{%user_locality%}/g, user.locality);
  output = output.replace(/{%user_mobile_phone%}/g, user.mobile_phone);
  output = output.replace(/{%user_description%}/g, user.user_description);
  // output = output.replace(/{%IMAGE%}/g, user.direction_image);

  return output;
};
