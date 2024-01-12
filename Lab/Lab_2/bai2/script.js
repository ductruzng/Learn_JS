const UDtCC = (text) => {
    const [first, second] = text.toLowerCase().split('_');
    const textCC = first + second.replace(second[0], second[0].toUpperCase())
    console.log(textCC)

}
UDtCC('underscore_case')
UDtCC('first_name')
UDtCC('Some_Variable')
UDtCC('caculate_AGE')
UDtCC('delayed_departure')

