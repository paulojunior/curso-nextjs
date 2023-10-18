import React from 'react';
import { IconEmail, IconInstagram, IconPhone, IconProfile } from "./Icons";

interface CardProps {
  company?: string | string[];
  name?: string | string[];
  phone?: string | string[];
  email?: string | string[];
  instagram?: string | string[];
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="flex">
      <table>
        <tbody>
          <tr>
            <td colSpan={2}><span className="underline text-2xl">{props.company}</span></td>
          </tr>
          <tr>
          <td>{IconProfile}</td>
            <td>{props.name}</td>
          </tr>
          <tr>
          <td>{IconPhone}</td>
            <td>{props.phone}</td>
          </tr>
          <tr>
          <td>{IconEmail}</td>
            <td>{props.email}</td>
          </tr>
          <tr>
          <td>{IconInstagram}</td>
            <td>{props.instagram}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Card;
export type { CardProps };