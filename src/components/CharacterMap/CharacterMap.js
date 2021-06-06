import PropTypes from "prop-types";

export default function CharacterMap({textInput}) {

  /** 
   * @return {object}, 
   * @param {string} textInput 
  */
  const itemize = (textInput) => {
    return (textInput + '').split('').filter(char => char !== ' ')
      .reduce((acc, currentValue) => {
        const letter = currentValue.toLocaleLowerCase();
        return {
          ...acc,
          [letter]: (acc[letter] || 0) + 1
        }
      }, {});
  }
  return (
    <div>
      {(Object.entries(itemize(textInput)).map(([key, value]) => {
        return <span>{key} : {value} <br/></span>
      }))}
    </div>
  )
}
CharacterMap.propTypes = {
  textInput: PropTypes.string.isRequired
}