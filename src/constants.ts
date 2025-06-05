
import {Type, CheckSquare, Circle, List, Calendar, Hash, Phone, AlignLeft, Mail } from "lucide-react";

export  const elementTemplates = [
    { type: 'text', label: 'Text Input', icon: Type },
    { type: 'email', label: 'Email', icon: Mail },
    { type: 'phone', label: 'Phone', icon: Phone },
    { type: 'number', label: 'Number', icon: Hash },
    { type: 'date', label: 'Date', icon: Calendar },
    { type: 'textarea', label: 'Textarea', icon: AlignLeft },
    { type: 'select', label: 'Select', icon: List },
    { type: 'checkbox', label: 'Checkbox', icon: CheckSquare },
    { type: 'radio', label: 'Radio', icon: Circle }
  ];