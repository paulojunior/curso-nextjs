import QrCode from "../components/QrCode"
import Image from 'next/image'
import tag from '../../public/tag.jpeg'
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
      <div className='yourClassName2'>
        <Image src={ tag } alt="match icon" width={800} height={800}/>
        <div className="absolute left-44 top-24">
          <QrCode name={this.props.name} email={this.props.email} company={this.props.company} phone={this.props.phone} instagram={this.props.instagram} />
        </div>
      </div>
    )
  }
}