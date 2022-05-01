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
      <div className={`
        yourClassName
      `} >
        <Image src={ tag } alt="match icon" width={710} height={710} />
        { /*
        <div className="absolute left-32 top-24">
          <QrCode name={this.props.name} email={this.props.email} company={this.props.company} phone={this.props.phone} instagram={this.props.instagram} />
    </div>
    */ }
      </div>
    )
  }
}