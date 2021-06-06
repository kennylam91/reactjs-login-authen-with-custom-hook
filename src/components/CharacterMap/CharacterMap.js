import PropTypes from "prop-types";
import { memo, useMemo } from "react";

function CharacterMap({textInput, showResult}) {

  const characters = useMemo(() => itemize(textInput), [textInput]);
  return (
    <div>
      {showResult && <p>This displays a list of the most common characters</p>}
      {(Object.entries(characters).map(([key, value]) => {
        return <span key={key}>{key} : {value} <br/></span>
      }))}
    </div>
  )
}
CharacterMap.propTypes = {
  textInput: PropTypes.string.isRequired,
  showResult: PropTypes.bool
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
