import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppTextInput from './AppTextInput'
import ErrorMessage from './ErrorMessage'

import { useFormikContext } from 'formik'

function AppFormFill({ name, ...otherProps }) {

    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
    return (
      <>
          <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                {...otherProps}
                />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
      </>
    )
}

const styles = StyleSheet.create({

})

export default AppFormFill;