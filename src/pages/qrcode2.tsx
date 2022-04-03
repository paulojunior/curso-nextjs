import QrCode from "../components/QrCode"
import Image from 'next/image'
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
        bg-[url('../../public/tag.jpeg')]
        h-screen w-screen
        m-0
      `} >
        {/*<Image src={ tag } alt="match icon" width={900} height={1124}/> */}
        <div className="absolute left-48 top-48">
          <QrCode name={this.props.name} email={this.props.email} company={this.props.company} phone={this.props.phone} instagram={this.props.instagram} />
    </div>
      </div>
    )
  }
}