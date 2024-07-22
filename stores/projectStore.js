import { defineStore } from 'pinia'
export const useProjectStore = defineStore({
    id: 'project-store',
    state: () => {
        return {
            projects: []
        }
    },
    actions: {
        async fetchProjects() {
            try {
                const response = await fetch('https://api.alumni-portal.ru/projects', {
                    credentials: "include",
                })
                if (response.ok) {
                    const data = await response.json();
                    this.projects = data
                } else {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Project fetch failed');
                }
            } catch (error) {
                console.error('Fetch prj error', error);
                throw error;
            }
        },
        addProject(project) {
            this.projects.push(project)
        }
    },
    getters: {
        getProjects: state => state.projects,
        getProjectById: (state) => {
            return (id) => state.projects.find(p => p.id === id)},
    }
})