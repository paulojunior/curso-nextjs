import QrCode from "../components/QrCode"
import Image from 'next/image'
import tag from '../../public/tag2.jpeg'
import React from 'react';

interface IProps {
  name: string
  email: string
  company: string
  phone: string
  instagram: string
}

export default class QrCodePage extends React.Component<IProps> {
  render() {
    return (
      <div style={{ position: 'relative', display: 'inline-block' }} className={` yourClassName `} >
        <Image src={ tag } alt="Imagem 1" style={{ width: '100%', height: 'auto' }} />
        <div style={{ position: 'absolute', top: '43%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <QrCode name={this.props.name} email={this.props.email} company={this.props.company} phone={this.props.phone} instagram={this.props.instagram} />
        </div>
      </div>
    )
  }
}