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
        <Image src={ tag } alt="match icon" />
        <div className="absolute left-36 top-20">
          <QrCode name={this.props.name} email={this.props.email} company={this.props.company} phone={this.props.phone} instagram={this.props.instagram} />
    </div>
      </div>
    )
  }
}