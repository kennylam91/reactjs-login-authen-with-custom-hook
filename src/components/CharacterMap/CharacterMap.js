import PropTypes from "prop-types";
import { memo, useMemo } from "react";

function CharacterMap({textInput, showResult, transformer}) {

  const characters = useMemo(() => itemize(textInput, transformer), [textInput, transformer]);
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
  showResult: PropTypes.bool,
  transformer: PropTypes.func
}

/** 
   * @return {object}, 
   * @param {string} input 
   * @param {function} transformer
  */
 const itemize = (input, transformer) => {
  return (input + '').split('').filter(char => char !== ' ')
    .reduce((acc, currentValue) => {
      const letter = transformer? transformer(currentValue) : currentValue;
      return {
        ...acc,
        [letter]: (acc[letter] || 0) + 1
      }
    }, {});
}

export default memo(CharacterMap);
