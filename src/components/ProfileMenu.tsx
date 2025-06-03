
import React, { useState } from 'react';
import { User, Eye, EyeOff, Trash2 } from 'lucide-react';

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const userData = {
    username: 'student_2024',
    password: 'password123'
  };

  const handleDeleteProfile = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    // Here you would typically handle the actual deletion
    alert('Profile deletion confirmed. This would typically redirect to a login page.');
    setShowDeleteConfirm(false);
    setIsOpen(false);
  };

  return (
    <>
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
      >
        <User size={20} />
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl border border-border p-6 w-full max-w-md shadow-2xl">
            {!showDeleteConfirm ? (
              <>
                {/* Profile Header */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <User size={32} className="text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">Profile Information</h2>
                </div>

                {/* User Details */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground block mb-1">
                      Username
                    </label>
                    <div className="p-3 bg-accent/30 rounded-lg border border-border">
                      <span className="font-medium">{userData.username}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground block mb-1">
                      Password
                    </label>
                    <div className="flex items-center p-3 bg-accent/30 rounded-lg border border-border">
                      <span className="flex-1 font-mono">
                        {showPassword ? userData.password : '••••••••••'}
                      </span>
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="ml-2 p-1 hover:bg-accent rounded transition-colors"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleDeleteProfile}
                    className="w-full flex items-center justify-center space-x-2 p-3 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
                  >
                    <Trash2 size={16} />
                    <span>Delete Profile</span>
                  </button>
                  
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              <>
                {/* Delete Confirmation */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-3">
                    <Trash2 size={32} className="text-destructive" />
                  </div>
                  <h2 className="text-xl font-bold text-destructive">Confirm Deletion</h2>
                  <p className="text-muted-foreground mt-2">
                    Are you sure you want to delete your profile? This action cannot be undone.
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={confirmDelete}
                    className="w-full p-3 bg-destructive text-destructive-foreground rounded-lg hover:bg-destructive/90 transition-colors"
                  >
                    Yes, Delete Profile
                  </button>
                  
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="w-full p-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileMenu;
