import { UserPreferences } from '@/lib/api/types';
import { ConversationState } from '@/types';

const STORAGE_KEYS = {
  USER_PREFERENCES: 'bredbandsval_user_preferences',
  CONVERSATION_STATE: 'bredbandsval_conversation_state',
  SELECTED_PACKAGES: 'bredbandsval_selected_packages',
  COMPARISON_HISTORY: 'bredbandsval_comparison_history',
} as const;

export class LocalStorage {
  // Save user preferences
  static saveUserPreferences(preferences: Partial<UserPreferences>): void {
    try {
      const existing = this.getUserPreferences();
      const updated = { ...existing, ...preferences };
      localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(updated));
    } catch (error) {
      console.error('Failed to save user preferences:', error);
    }
  }

  // Get user preferences
  static getUserPreferences(): Partial<UserPreferences> | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to load user preferences:', error);
      return null;
    }
  }

  // Save conversation state
  static saveConversationState(state: ConversationState): void {
    try {
      // Don't save messages older than 24 hours
      const recentMessages = state.messages.filter(msg => {
        const msgTime = new Date(msg.timestamp).getTime();
        const now = Date.now();
        return now - msgTime < 24 * 60 * 60 * 1000;
      });

      const stateToSave = {
        ...state,
        messages: recentMessages.slice(-20), // Keep last 20 messages
      };

      localStorage.setItem(STORAGE_KEYS.CONVERSATION_STATE, JSON.stringify(stateToSave));
    } catch (error) {
      console.error('Failed to save conversation state:', error);
    }
  }

  // Get conversation state
  static getConversationState(): ConversationState | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.CONVERSATION_STATE);
      if (!stored) return null;

      const state = JSON.parse(stored);
      // Convert timestamp strings back to Date objects
      state.messages = state.messages.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
      }));

      return state;
    } catch (error) {
      console.error('Failed to load conversation state:', error);
      return null;
    }
  }

  // Save selected packages for comparison
  static saveSelectedPackages(packageIds: string[]): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SELECTED_PACKAGES, JSON.stringify(packageIds));
    } catch (error) {
      console.error('Failed to save selected packages:', error);
    }
  }

  // Get selected packages
  static getSelectedPackages(): string[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.SELECTED_PACKAGES);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to load selected packages:', error);
      return [];
    }
  }

  // Save comparison to history
  static   saveComparisonToHistory(comparison: {
    date: Date;
    address: string;
    recommendations: unknown[];
    preferences: Partial<UserPreferences>;
  }): void {
    try {
      const history = this.getComparisonHistory();
      history.unshift({
        ...comparison,
        id: Date.now().toString(),
      });

      // Keep only last 10 comparisons
      const trimmedHistory = history.slice(0, 10);
      
      localStorage.setItem(STORAGE_KEYS.COMPARISON_HISTORY, JSON.stringify(trimmedHistory));
    } catch (error) {
      console.error('Failed to save comparison history:', error);
    }
  }

  // Get comparison history
  static getComparisonHistory(): unknown[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.COMPARISON_HISTORY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Failed to load comparison history:', error);
      return [];
    }
  }

  // Clear all stored data
  static clearAll(): void {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }

  // Export all data (for GDPR compliance)
  static exportAllData(): Record<string, unknown> {
    const data: Record<string, unknown> = {};
    
    Object.entries(STORAGE_KEYS).forEach(([name, key]) => {
      try {
        const stored = localStorage.getItem(key);
        if (stored) {
          data[name] = JSON.parse(stored);
        }
      } catch (error) {
        console.error(`Failed to export ${name}:`, error);
      }
    });

    return data;
  }
}
