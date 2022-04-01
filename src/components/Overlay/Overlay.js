import React from 'react';
import './Overlay.css'

export function Overlay({ isOverlayActive, onClick }) {
  return <div onClick={onClick} className={`imajin__overlay ${isOverlayActive ? 'imajin__block' : 'imajin__hidden'}`}></div>;
}
