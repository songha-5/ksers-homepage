import { INTUITIVE_COURSE } from "@/components/master-class/master-class-intuitive";
import type { MasterClassCourse } from "@/components/master-class/master-class-model";
import { MEDTRONIC_COURSE } from "@/components/master-class/master-class-medtronic";
import { REVO_COURSE } from "@/components/master-class/master-class-revo";

export const MASTER_CLASS_COURSES: readonly MasterClassCourse[] = [
  MEDTRONIC_COURSE,
  REVO_COURSE,
  INTUITIVE_COURSE,
];
