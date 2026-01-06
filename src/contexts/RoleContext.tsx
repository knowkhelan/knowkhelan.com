import { createContext, useContext, useState, ReactNode } from 'react';

type Role = 'operator' | 'strategist';

interface RoleContextType {
  role: Role;
  toggleRole: () => void;
  isOperator: boolean;
  isStrategist: boolean;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>('operator');

  const toggleRole = () => {
    setRole(prev => prev === 'operator' ? 'strategist' : 'operator');
  };

  return (
    <RoleContext.Provider value={{
      role,
      toggleRole,
      isOperator: role === 'operator',
      isStrategist: role === 'strategist',
    }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
}
