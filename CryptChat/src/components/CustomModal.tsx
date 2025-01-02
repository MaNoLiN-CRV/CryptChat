import React from 'react';
import { Modal, View, TouchableOpacity } from 'react-native';
import { Surface } from 'react-native-paper';
import { BlurView } from '@react-native-community/blur';
import { customModalStyle } from './styles/styles';

interface CustomModalProps {
  visible: boolean;
  onDismiss: () => void;
  children: React.ReactNode;
}

const CustomModal = ({ visible, onDismiss, children }: CustomModalProps) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <BlurView
        style={customModalStyle.blurContainer}
        blurType="light"
        blurAmount={5}
      >
        <TouchableOpacity style={customModalStyle.modalContainer} activeOpacity={1} onPress={onDismiss}>
          <Surface style={customModalStyle.modalContent} onTouchStart={(e) => e.stopPropagation()}>
            {children}
          </Surface>
        </TouchableOpacity>
      </BlurView>
    </Modal>
  );
};

export default CustomModal;
