 import React, { Component } from 'react'
 import { View } from 'react-native'
 import { TextField } from 'carbon-ui'

 export default class Example extends Component {
   state = {
     form: {
       textFieldOne: '',
       textFieldTwo: 'Edit this one to see an error',
     },
     errors: {}
   }

   _setFormValue = (field, val) => {
     // Set an example error
     if (field === 'textFieldTwo') {
       this.setState({
         errors: { textFieldTwo: 'Something went wrong'}
       })
     }

     this.setState({ form: { ...this.state.form, [field]: val }})
   }

   render() {
     return (
       <View>
         <TextField
           placeholder="Text field one"
           value={this.state.form.textFieldOne}
           onChangeText={val => this._setFormValue('textFieldOne', val)} />
         <TextField
           placeholder="Text field two"
           singleLine
           value={this.state.form.textFieldTwo}
           error={this.state.errors.textFieldTwo}
           onChangeText={val => this._setFormValue('textFieldTwo', val)} />
         <TextField
           placeholder="Disabled"
           singleLine
           disabled />
       </View>
     )
   }
 }
