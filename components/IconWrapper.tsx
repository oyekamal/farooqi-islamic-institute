
import React from 'react';
import { BookOpen, Star, Shield, Users, Heart, Book, CloudMoon, Waves, Mail, Phone, MessageCircle } from 'lucide-react';

const icons = {
  BookOpen, Star, Shield, Users, Heart, Book, CloudMoon, Waves, Mail, Phone, MessageCircle
};

interface IconWrapperProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ name, className, size = 24 }) => {
  const IconComponent = icons[name as keyof typeof icons] || Book;
  return <IconComponent className={className} size={size} />;
};
