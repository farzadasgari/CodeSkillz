import { useState } from "react";
import { Camera, Eye, EyeOff, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

const ProfileSettings = () => {
  const { toast } = useToast();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    bio: "Aspiring Python Pro passionate about coding and machine learning.",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    emailNotifications: true,
    classReminders: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your profile settings have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-heading font-bold text-foreground mb-2">Profile Settings</h2>
        <p className="text-muted-foreground">Manage your account information and preferences</p>
      </div>

      {/* Profile Picture */}
      <Card className="border-border shadow-sm">
        <CardHeader className="bg-gradient-card">
          <CardTitle className="text-primary-foreground">Profile Picture</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Avatar className="w-24 h-24 border-4 border-primary">
                <AvatarImage src="" alt="Profile" />
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl font-bold">
                  JD
                </AvatarFallback>
              </Avatar>
              <button className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <Button variant="secondary" className="gap-2">
                <Camera className="w-4 h-4" />
                Upload New Picture
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                JPG, PNG or GIF. Max size 2MB.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card className="border-border shadow-sm">
        <CardHeader className="bg-gradient-card">
          <CardTitle className="text-primary-foreground">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="border-primary/30 focus:border-secondary"
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border-primary/30 focus:border-secondary"
            />
          </div>
          <div>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows={4}
              className="border-primary/30 focus:border-secondary resize-none"
            />
          </div>
        </CardContent>
      </Card>

      {/* Change Password */}
      <Card className="border-border shadow-sm">
        <CardHeader className="bg-gradient-card">
          <CardTitle className="text-primary-foreground">Change Password</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div>
            <Label htmlFor="currentPassword">Current Password</Label>
            <div className="relative">
              <Input
                id="currentPassword"
                name="currentPassword"
                type={showCurrentPassword ? "text" : "password"}
                value={formData.currentPassword}
                onChange={handleInputChange}
                className="border-primary/30 focus:border-secondary pr-10"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-secondary/80"
              >
                {showCurrentPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div>
            <Label htmlFor="newPassword">New Password</Label>
            <div className="relative">
              <Input
                id="newPassword"
                name="newPassword"
                type={showNewPassword ? "text" : "password"}
                value={formData.newPassword}
                onChange={handleInputChange}
                className="border-primary/30 focus:border-secondary pr-10"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-secondary/80"
              >
                {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="border-primary/30 focus:border-secondary pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary hover:text-secondary/80"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notification Preferences */}
      <Card className="border-border shadow-sm">
        <CardHeader className="bg-gradient-card">
          <CardTitle className="text-primary-foreground">Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="emailNotifications"
              checked={formData.emailNotifications}
              onCheckedChange={(checked) => handleCheckboxChange("emailNotifications", checked as boolean)}
              className="data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
            />
            <Label htmlFor="emailNotifications" className="cursor-pointer">
              Receive email updates about new courses and features
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="classReminders"
              checked={formData.classReminders}
              onCheckedChange={(checked) => handleCheckboxChange("classReminders", checked as boolean)}
              className="data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
            />
            <Label htmlFor="classReminders" className="cursor-pointer">
              Send reminders for upcoming Google Meet classes
            </Label>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button variant="secondary" className="flex-1 gap-2" onClick={handleSave}>
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
        <Button variant="outline" className="gap-2">
          <X className="w-4 h-4" />
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ProfileSettings;
