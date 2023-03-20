import * as React from 'react'
import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Button, Header, Input } from 'react-native-elements'

const Page = styled(View)`
  padding: 40px 30px 0 30px;
`

const GirlScreen = () => {
  return (
    <View>
      <Header centerComponent={{text: 'Cho Thảo Ngân', style: { color: '#fff' } }} />
      <Page>
        <View>
          <Input label="Mã số gấu" placeholder='Nhập mã số của gấu đực vào đây!' />
          <Button title="Xác nhận mã số" />
        </View>
      </Page>
    </View>
  )
}

export default GirlScreen
