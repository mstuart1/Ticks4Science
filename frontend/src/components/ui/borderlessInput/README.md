# Borderless Input
An input with a darker background but no border

## Props
- colors: object
    - text: default is black
    - bg: background color, default is #f2f2f2
    - ph: placeholder text color, default is #aaa
    - label: label text color, default is #222,
    - errorBg: field error message background, default is #d30909
    - errorText: error text color, default is white
- type: string, type of input, default is email
- name: string, db value to update/add, default is ''
- value: state object.field, default is ''
- placeholder: string, default is "enter email"
- errorText: string, leaving blank will prevent the error from appearing, default is "The email is invalid"
    
    
inspired by https://medium.com/codex/how-to-style-an-input-field-with-css-only-tips-and-techniques-e6a00e9dcc50