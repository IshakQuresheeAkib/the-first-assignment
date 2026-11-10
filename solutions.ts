const multiplyValue = (value : number, multiplier?: number): number => {
  if (multiplier !== undefined) {
    return value * multiplier;
  } else {
    return value * 2;
  }
}

const processInput  = (input: string | number | boolean): string | number => {
  if (typeof input === 'string') {
    return input.trim().toLowerCase();
  }
  if (typeof input === 'number') {
    return input * 10;
  } 
  return input ? "Active" : "Inactive";
};

const formatCoordinate = (coordinate: readonly [number, number, string]): string => {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return ([] as T[]).concat(...arrays);
};


interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
  );
}

const pluckValues = <T, K extends keyof T> (items: T[], key: K): T[K][] => {
  return items.map((item) => item[key])
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"));
      return;
    }
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
}
