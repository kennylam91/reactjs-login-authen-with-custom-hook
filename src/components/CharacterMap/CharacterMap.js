import PropTypes from "prop-types";
import { memo } from "react";

function CharacterMap({textInput}) {
  return (
    <div>
      {(Object.entries(itemize(textInput)).map(([key, value]) => {
        return <span key={key}>{key} : {value} <br/></span>
      }))}
    </div>
  )
}
CharacterMap.propTypes = {
  textInput: PropTypes.string.isRequired
}

/** 
   * @return {object}, 
   * @param {string} input 
  */
 const itemize = (input) => {
  return (input + '').split('').filter(char => char !== ' ')
    .reduce((acc, currentValue) => {
      const letter = currentValue.toLocaleLowerCase();
      return {
        ...acc,
        [letter]: (acc[letter] || 0) + 1
      }
    }, {});
}

export default memo(CharacterMap);
