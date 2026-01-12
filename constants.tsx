
import React from 'react';
import {
  Settings,
  Wind,
  Droplets,
  Wrench,
  ShieldCheck,
  Cpu,
  Activity,
  Package,
  Users,
  Factory,
  CheckCircle2,
  HardHat,
  Zap,
  Leaf
} from 'lucide-react';
import { NavItem, ServiceItem, GalleryItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Asset Lifecycle', href: '#lifecycle' },
  { label: 'Allied Services', href: '#allied' },
  { label: 'Contact', href: '#contact' },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    title: 'Dry Cooling Solutions',
    description: 'Specializing in ACHE, AFC, FFC, and ACC systems with high thermal performance and energy efficiency.',
    icon: <Wind className="w-8 h-8 text-blue-500" />,
    tags: ['Air Cooled Heat Exchanger', 'Air Fin Cooler', 'Fin Fan Cooler', 'Air Cooled Condenser', 'Air Pre Heaters']
  },
  {
    title: 'Projects & Field Services',
    description: 'End-to-end EPC solutions including design support, modular assembly, subcontracting services, on-site fabrication, and installation of Dry Cooling Heat Exchangers (ACHE, APH, and ACC).',
    icon: <Settings className="w-8 h-8 text-blue-500" />,
    tags: ['Design Support', 'Project Management', 'Installation', 'Commissioning', 'Shutdowns']
  },
  {
    title: 'Maintenance & Overhauls',
    description: 'Precision maintenance of rotating equipment including fans, motors, gearboxes, and vibration analysis.',
    icon: <Wrench className="w-8 h-8 text-blue-500" />,
    tags: ['Overhaul', 'Alignment', 'Dynamic Balancing']
  },
  {
    title: 'Performance Audits',
    description: 'Data-driven on-site energy audits and CFD modeling to identify bottlenecks and optimize thermal processes.',
    icon: <Activity className="w-8 h-8 text-blue-500" />,
    tags: ['Energy Audit', 'CFD Modeling', 'Analysis']
  },
  {
    title: 'Inspection & Testing',
    description: 'Comprehensive NDT services (RT, UT, MPT, DPT, PMI & ECT) to ASNT Level II standards for asset integrity.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
    tags: ['NDT', 'ASNT Level II', 'Asset Integrity']
  },
  {
    title: 'Spare Parts & Components Supply',
    description: 'Comprehensive supply of OEM and OEM-equivalent components ensuring system compatibility and long service life.',
    icon: <Package className="w-8 h-8 text-blue-500" />,
    tags: ['Tube Bundle Plugs & Gaskets', 'Fan Hubs, Blades & Accessories', 'V & Timing Pulleys', 'V & Timing Belts', 'Bearings', 'Louver Spares', 'Half-Tube Supports', 'Fin Components', 'Instruments', 'Fasteners']
  }
];

export const INDUSTRIES = [
  { name: 'Oil & Gas', image: 'https://picsum.photos/seed/oil/800/600' },
  { name: 'Refinery', image: 'https://picsum.photos/seed/refinery/800/600' },
  { name: 'Petrochemical', image: 'https://picsum.photos/seed/petro/800/600' },
  { name: 'Steel Plants', image: 'https://picsum.photos/seed/steel/800/600' },
  { name: 'Power Sector', image: 'https://picsum.photos/seed/power/800/600' },
  { name: 'LNG Terminals', image: 'https://picsum.photos/seed/lng/800/600' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Dry Cooling Solutions
  { title: 'Forced Draft Air Fin Cooler', category: 'Dry Cooling', imageUrl: '/assets/Final/Forced Draght Air Fin Cooler.jpg' },
  { title: 'Induced Draft Air Fin Cooler', category: 'Dry Cooling', imageUrl: '/assets/Final/Induced Draght Air Fin Cooler.jpg' },
  { title: 'Offshore Air Fin Cooler', category: 'Dry Cooling', imageUrl: '/assets/Final/Offshore Air Fin Cooler.jpg' },
  { title: 'Steel Plant Fin Fan Cooler', category: 'Dry Cooling', imageUrl: '/assets/Final/Steel Plant Fin Fan Cooler.jpg' },
  { title: 'Engine Air Cooler', category: 'Dry Cooling', imageUrl: '/assets/Final/Engine Air Cooler.jpg' },
  { title: 'Closed Loop Air Cooler', category: 'Dry Cooling', imageUrl: '/assets/Final/Closed Loop Air Cooler.jpg' },

  // Maintenance & Overhauls
  { title: 'ACHE TTS Welding', category: 'Maintenance', imageUrl: '/assets/Maintence/Final/Tube bundles/ACHE TTS welding.jpg' },
  { title: 'ACHE Retubing', category: 'Maintenance', imageUrl: '/assets/Maintence/Final/Tube bundles/ACHE retubing 1.jpg' },
  { title: 'TTS Welding Process', category: 'Maintenance', imageUrl: '/assets/Maintence/Final/Tube bundles/TTS welding.jpg' },
  { title: 'Rotating Equipment Maintenance', category: 'Maintenance', imageUrl: '/assets/Maintence/Final/Rotating Eq maintenance/IMG_20210417_155803.jpg' },
  { title: 'Motor & Gearbox Overhaul', category: 'Maintenance', imageUrl: '/assets/Maintence/Final/Rotating Eq maintenance/IMG_20210503_132721.jpg' },
  { title: 'Fan Assembly Work', category: 'Maintenance', imageUrl: '/assets/Maintence/Final/IMG_20210417_110325.jpg' },

  // Inspection & Testing
  { title: 'NDT Inspection Services', category: 'Inspection', imageUrl: '/assets/clients/Inspection & Testing/Final -Inspection/IMG_20201219_150740.jpg' },
  { title: 'Quality Testing', category: 'Inspection', imageUrl: '/assets/clients/Inspection & Testing/Final -Inspection/IMG_20210416_172140.jpg' },
  { title: 'Asset Integrity Check', category: 'Inspection', imageUrl: '/assets/clients/Inspection & Testing/Final -Inspection/IMG_20210515_143033.jpg' },

  // PEB & Structural
  { title: 'PEB Godown Structure', category: 'Structural Steel', imageUrl: '/assets/clients/PEB/Final/PEB Godown Structure.jpg' },
  { title: 'PEB Office Building', category: 'Structural Steel', imageUrl: '/assets/clients/PEB/Final/PEB Office.jpg' },
  { title: 'Industrial Shed', category: 'Structural Steel', imageUrl: '/assets/clients/PEB/Final/PEB shed.jpg' },
];

export const ALLIED_SERVICES = [
  { title: 'Heavy Fabrication', desc: 'Expertise in fabrication of Bellow Expansion Joints (CS/SS), pressure parts, skid modules, and all types of equipment.', icon: <Factory className="w-6 h-6" /> },
  { title: 'Structural Steel', desc: 'All kinds of steel structural works and PEB solutions for warehouses and factories with customized engineering. Expertise in all kinds of industrial shed sheeting works.', icon: <Zap className="w-6 h-6" /> },
  { title: 'Piping Works', desc: 'All kinds of piping works, including high-pressure piping modifications and fire-fighting system installation.', icon: <Droplets className="w-6 h-6" /> },
  { title: 'Technical Staffing & Manpower Supply', desc: 'Specialized supply of AFC/ACC field engineers, Supervisors, Fabricators, Millwrights, Structural fitters, and skilled Welders (TTS, TIG, MIG, SAW, and ARC), Grinders, Riggers and Helpers.', icon: <Users className="w-6 h-6" /> },
];
