
import { Doctor } from '@/types/doctor';

export const sampleDoctors: Doctor[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Miller',
    specialty: 'Cardiologist',
    subspecialties: ['Interventional Cardiology', 'Heart Failure'],
    hospital: 'Central Medical Center',
    location: 'New York, NY',
    experience: 15,
    rating: 4.8,
    reviewCount: 128,
    patients: 1500,
    bio: 'Dr. Sarah Miller is a board-certified cardiologist with over 15 years of experience in diagnosing and treating heart conditions. She specializes in interventional cardiology and heart failure management, utilizing the latest techniques and technologies for optimal patient care.',
    education: [
      'MD, Harvard Medical School',
      'Residency, Massachusetts General Hospital',
      'Fellowship in Cardiology, Johns Hopkins Hospital'
    ],
    certifications: [
      'American Board of Internal Medicine - Cardiovascular Disease',
      'Advanced Cardiac Life Support (ACLS)',
      'Fellow of the American College of Cardiology (FACC)'
    ],
    specializations: [
      'Coronary Artery Disease',
      'Heart Failure Management',
      'Cardiac Catheterization',
      'Preventive Cardiology'
    ],
    availability: {
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      hours: '9:00 AM - 5:00 PM'
    },
    contactInfo: {
      email: 'sarahmiller@centralmed.com',
      phone: '(212) 555-7890'
    }
  },
  {
    id: '2',
    firstName: 'James',
    lastName: 'Wilson',
    specialty: 'Neurologist',
    subspecialties: ['Movement Disorders', 'Neurodegenerative Diseases'],
    hospital: 'University Medical Center',
    location: 'Boston, MA',
    experience: 12,
    rating: 4.7,
    reviewCount: 94,
    patients: 1200,
    bio: 'Dr. James Wilson is a highly skilled neurologist who specializes in movement disorders and neurodegenerative diseases. With 12 years of experience, he is dedicated to providing compassionate care for patients with complex neurological conditions.',
    education: [
      'MD, Yale School of Medicine',
      'Residency in Neurology, Mayo Clinic',
      'Fellowship in Movement Disorders, UCSF'
    ],
    certifications: [
      'American Board of Psychiatry and Neurology',
      'American Academy of Neurology (Member)'
    ],
    specializations: [
      'Parkinson\'s Disease',
      'Essential Tremor',
      'Multiple Sclerosis',
      'Alzheimer\'s Disease'
    ],
    availability: {
      days: ['monday', 'wednesday', 'friday'],
      hours: '10:00 AM - 6:00 PM'
    },
    contactInfo: {
      email: 'jameswilson@universitymed.com',
      phone: '(617) 555-3214'
    }
  },
  {
    id: '3',
    firstName: 'Emily',
    lastName: 'Chen',
    specialty: 'Endocrinologist',
    subspecialties: ['Diabetes Management', 'Thyroid Disorders'],
    hospital: 'Pacific Health Institute',
    location: 'San Francisco, CA',
    experience: 9,
    rating: 4.9,
    reviewCount: 87,
    patients: 950,
    bio: 'Dr. Emily Chen is an endocrinologist who focuses on diabetes management and thyroid disorders. With a patient-centered approach, she works closely with each individual to develop personalized treatment plans for optimal health outcomes.',
    education: [
      'MD, Stanford University School of Medicine',
      'Residency in Internal Medicine, UCSF Medical Center',
      'Fellowship in Endocrinology, Duke University Medical Center'
    ],
    certifications: [
      'American Board of Internal Medicine - Endocrinology',
      'Certified Diabetes Educator'
    ],
    specializations: [
      'Type 1 and Type 2 Diabetes',
      'Thyroid Disorders',
      'Adrenal Disorders',
      'Metabolic Syndrome'
    ],
    availability: {
      days: ['tuesday', 'thursday', 'friday'],
      hours: '8:00 AM - 4:00 PM'
    },
    contactInfo: {
      email: 'emilychen@pacifichealth.com',
      phone: '(415) 555-9876'
    }
  },
  {
    id: '4',
    firstName: 'Michael',
    lastName: 'Roberts',
    specialty: 'Orthopedist',
    subspecialties: ['Sports Medicine', 'Joint Replacement'],
    hospital: 'Sports Medicine Center',
    location: 'Chicago, IL',
    experience: 14,
    rating: 4.6,
    reviewCount: 112,
    patients: 1300,
    bio: 'Dr. Michael Roberts is an orthopedic surgeon specializing in sports medicine and joint replacement procedures. He has extensive experience working with athletes of all levels and focuses on minimally invasive surgical techniques for faster recovery.',
    education: [
      'MD, University of Pennsylvania School of Medicine',
      'Residency in Orthopedic Surgery, Hospital for Special Surgery',
      'Fellowship in Sports Medicine, Andrews Institute'
    ],
    certifications: [
      'American Board of Orthopedic Surgery',
      'Certificate of Added Qualification in Sports Medicine'
    ],
    specializations: [
      'ACL Reconstruction',
      'Rotator Cuff Repair',
      'Knee and Hip Replacement',
      'Arthroscopic Surgery'
    ],
    availability: {
      days: ['monday', 'tuesday', 'thursday'],
      hours: '9:00 AM - 5:00 PM'
    },
    contactInfo: {
      email: 'michaelroberts@sportsmedicine.com',
      phone: '(312) 555-4567'
    }
  },
  {
    id: '5',
    firstName: 'Olivia',
    lastName: 'Johnson',
    specialty: 'Dermatologist',
    subspecialties: ['Cosmetic Dermatology', 'Skin Cancer'],
    hospital: 'Skin Health Clinic',
    location: 'Miami, FL',
    experience: 11,
    rating: 4.7,
    reviewCount: 156,
    patients: 1800,
    bio: 'Dr. Olivia Johnson is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. She is particularly focused on early detection and treatment of skin cancer, as well as helping patients achieve their aesthetic goals.',
    education: [
      'MD, Columbia University College of Physicians and Surgeons',
      'Residency in Dermatology, NYU Langone Medical Center',
      'Fellowship in Procedural Dermatology, Memorial Sloan Kettering'
    ],
    certifications: [
      'American Board of Dermatology',
      'American Society for Dermatologic Surgery (Member)'
    ],
    specializations: [
      'Skin Cancer Screening',
      'Mohs Surgery',
      'Botox and Fillers',
      'Laser Treatments'
    ],
    availability: {
      days: ['wednesday', 'thursday', 'friday', 'saturday'],
      hours: '9:00 AM - 3:00 PM'
    },
    contactInfo: {
      email: 'oliviajohnson@skinhealth.com',
      phone: '(305) 555-7812'
    }
  },
  {
    id: '6',
    firstName: 'Robert',
    lastName: 'Garcia',
    specialty: 'Gastroenterologist',
    subspecialties: ['Inflammatory Bowel Disease', 'Liver Disease'],
    hospital: 'Digestive Health Center',
    location: 'Houston, TX',
    experience: 13,
    rating: 4.8,
    reviewCount: 104,
    patients: 1100,
    bio: 'Dr. Robert Garcia is a gastroenterologist with special expertise in inflammatory bowel disease and liver disorders. He is committed to providing comprehensive care for patients with digestive health issues, utilizing advanced diagnostic and therapeutic techniques.',
    education: [
      'MD, Baylor College of Medicine',
      'Residency in Internal Medicine, Massachusetts General Hospital',
      'Fellowship in Gastroenterology and Hepatology, Mayo Clinic'
    ],
    certifications: [
      'American Board of Internal Medicine - Gastroenterology',
      'American Association for the Study of Liver Diseases (Member)'
    ],
    specializations: [
      'Crohn\'s Disease and Ulcerative Colitis',
      'Chronic Liver Disease',
      'Advanced Endoscopy',
      'Colorectal Cancer Screening'
    ],
    availability: {
      days: ['monday', 'tuesday', 'thursday', 'friday'],
      hours: '8:30 AM - 4:30 PM'
    },
    contactInfo: {
      email: 'robertgarcia@digestivehealth.com',
      phone: '(713) 555-2319'
    }
  },
  {
    id: '7',
    firstName: 'Jennifer',
    lastName: 'Taylor',
    specialty: 'Pulmonologist',
    subspecialties: ['Sleep Medicine', 'Critical Care'],
    hospital: 'Respiratory Care Institute',
    location: 'Denver, CO',
    experience: 10,
    rating: 4.9,
    reviewCount: 76,
    patients: 850,
    bio: 'Dr. Jennifer Taylor is a pulmonologist with specialization in sleep medicine and critical care. She is dedicated to diagnosing and treating a wide range of respiratory conditions, with a holistic approach to improving patients\' quality of life.',
    education: [
      'MD, University of Colorado School of Medicine',
      'Residency in Internal Medicine, University of Washington Medical Center',
      'Fellowship in Pulmonary and Critical Care Medicine, Cleveland Clinic'
    ],
    certifications: [
      'American Board of Internal Medicine - Pulmonary Disease',
      'American Board of Internal Medicine - Critical Care Medicine',
      'American Board of Sleep Medicine'
    ],
    specializations: [
      'COPD',
      'Asthma',
      'Sleep Apnea',
      'Interstitial Lung Disease'
    ],
    availability: {
      days: ['monday', 'wednesday', 'friday'],
      hours: '9:00 AM - 5:00 PM'
    },
    contactInfo: {
      email: 'jennifertaylor@respiratorycare.com',
      phone: '(303) 555-8742'
    }
  },
  {
    id: '8',
    firstName: 'David',
    lastName: 'Lee',
    specialty: 'Psychiatrist',
    subspecialties: ['Mood Disorders', 'Anxiety Disorders'],
    hospital: 'Mental Health Partners',
    location: 'Seattle, WA',
    experience: 8,
    rating: 4.8,
    reviewCount: 68,
    patients: 600,
    bio: 'Dr. David Lee is a compassionate psychiatrist who specializes in the treatment of mood and anxiety disorders. He takes an integrative approach to mental health care, combining medication management with psychotherapy techniques to address each person\'s unique needs.',
    education: [
      'MD, University of Washington School of Medicine',
      'Residency in Psychiatry, UCLA Medical Center',
      'Fellowship in Mood Disorders, Johns Hopkins Hospital'
    ],
    certifications: [
      'American Board of Psychiatry and Neurology',
      'American Psychiatric Association (Member)'
    ],
    specializations: [
      'Depression',
      'Bipolar Disorder',
      'Generalized Anxiety',
      'Panic Disorder'
    ],
    availability: {
      days: ['tuesday', 'wednesday', 'thursday'],
      hours: '10:00 AM - 6:00 PM'
    },
    contactInfo: {
      email: 'davidlee@mentalhealthpartners.com',
      phone: '(206) 555-6123'
    }
  }
];
